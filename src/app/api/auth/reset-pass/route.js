'use server'

import { verifyToken, compareHashAndPass, createHash } from "@/utils/auth";
import userModel from "@/models/User";
import db from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    await db();
    try {
        const {token, newPass} = await req.json();
        const decoded = verifyToken(token);
        
        if(!decoded){
            return NextResponse.json("Token invalido o expirado", {"status": 400});
        }

        const id = decoded.id;
        const user = await userModel.findById(id);
        
        const password = compareHashAndPass(newPass.newPass, user);
        
        if( password ){    
            return NextResponse.json("La nueva contraseñano puede ser igual a la anterior", {"status": 400});
        }
        
        const newPassHashed = await createHash(newPass.newPass);

        await userModel.findByIdAndUpdate(id, {
            password: newPassHashed
        }, {new: true});
        
        return NextResponse.json("Contraseña reseteada con exito", {"status": 200});
    } catch (error) {
        return NextResponse.json("Error al querer resetear la contraseña", error);
    }

}
'use server'
import userModel from "@/models/User";
import  db  from "@/lib/dbconnect";
import { createHash } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req){
    await db();
    
    try {
        const datos = await req.json();
        
        const userFound = await userModel.findOne({email: datos.email});
        
        if (userFound) {
            if (userFound.email || userFound.uername) {
                return NextResponse.json("El email o usuario ya existe", {"status": 200});
            }
        }
        
        const passwordHash = await createHash(datos.password);
        
        const newUser = new userModel({
            name: datos.name,
            lastName: datos.lastName,
            email: datos.email,
            username: datos.username,
            password: passwordHash
        });
        

        const res = await newUser.save();
        
        return NextResponse.json(res.username, {"status": 201});
    } catch (error) {
        return NextResponse.json({"message": "Error al crear el usuario"}, {"status": 500});
    }
}
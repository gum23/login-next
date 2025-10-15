'use server'
import db from"@/lib/dbconnect";
import userModel from "@/models/User";
import { compareHashAndPass } from "@/utils/auth";
import { NextResponse } from "next/server";
import { signToken } from "@/utils/auth";


export async function POST(req) {
    await db();
    try {
        const datos = await req.json();

        const userFound = await userModel.findOne({username: datos.username});
        
        if (userFound === null) {
            return NextResponse.json("Credenciales incorrectas", {"status": 404});
        }

        const passOk = compareHashAndPass(datos.password, userFound);
        if (!passOk) {
            return NextResponse.json("Credenciales incorrectas", {"status": 403});
        }

        const token = signToken({id: `${userFound._id}`, username: userFound.username});
        
        // Guardamos el token en una cookie
        const res = NextResponse.json("Login exitoso", {"status": 200});
        res.cookies.set("token", token, {
            httpOnly: true,
             path: "/",
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
        });
        
        return res;
        
    } catch (error) {
        return NextResponse.json({"message": "Error de servidor"}, {"status": 500});
    }
}
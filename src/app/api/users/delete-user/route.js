'use server'

import db from "@/lib/dbconnect";
import userModel from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req){
    await db();
    try {
        const id = await req.json();
        await userModel.findByIdAndDelete({_id: id.id});
        return NextResponse.json("El usuario se eliminó correctamente", {status: 200});

    } catch (error) {
        return NextResponse.json("No se pudo eliminar el usuario", {status: 500});
    }
}
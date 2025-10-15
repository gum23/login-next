'use server'
import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({message: "Sesion Cerrada"}, {"status": 200});
    res.cookies.set("token", "", {maxAge: 0});
    return res;
}
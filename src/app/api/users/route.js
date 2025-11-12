'use server'
import userModel from "@/models/User";
import db from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/auth";

export async function GET(req) {
    await db(); 
    try {
        const usersSearch = await userModel.find({});
        const users = usersSearch.map(user => {
            return {
                "id": `${user._id}`,
                "name": user.name,
                "lastName": user.lastName,
                "username": user.username
            }
        });

        const token = req.cookies.get("token")?.value;
        const tokenVerify = verifyToken(token);
        const idToken = tokenVerify.id;
        

        return NextResponse.json({users: users, idToken: idToken }, {"status": 200});
    } catch (error) {
        return NextResponse.json("Error al traer lista de usuarios", {status: 500});
    }
}
'use server'
import userModel from "@/models/User";
import db from "@/lib/dbconnect";
import { NextResponse } from "next/server";

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
        
        return NextResponse.json(users, {"status": 200});
    } catch (error) {
        
    }
}
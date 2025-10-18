'use server'

import userModel from "@/models/User";
import db from "@/lib/dbconnect";
import mailer from "nodemailer";
import config from "@/utils/config";
import { createResetToken } from "@/utils/auth"
import { NextResponse } from "next/server";

export async function POST(req) {
    await db();
    try {
        const datos = await req.json();
        const userFound = await userModel.findOne({username: datos.username});

        if(!userFound || userFound === null) {
            return NextResponse.json("El usuario no existe", {"status": 404});
        }
        
        const token = createResetToken(`${userFound._id}`);
        const link = `http://localhost:3000/reset-pass?token=${token}`;

        const transporter = mailer.createTransport({
            service:"gmail",
            port: 587,
            auth: {
                user: `${config.mail}`,
                pass: `${config.pass}`
            }
        });

        await transporter.sendMail({
            from: `${config.app_mail_user}`,
            to: `${userFound.email}`,
            subject: "Recuperación de cuenta",
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="font-weight: bold">Haga click en el botón de abajo</h2>
                    </br>
                    <p>El siguiente botón lo redireccionará a una vista</p>
                    </br>
                    <p> donde podrá restablecer su contraseña.</p>
                    </br>
                    <p>Tenga en cuenta que no podrá ser la misma.</p>
                    </br>
                    <h4>Recuerde que el link vence en 2 minutos</h4>
                    </br>
                </div>
                <div style="text-align: center;">
                    <a href="${link}">
                        <button style="padding: 10px 20px; background-color: #4CAF50;
                         color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Reset Password
                        </button>
                    </a>
                </div>
            </div>
            `
        });

        return NextResponse.json("Revise su bandeja de correo", {"status": 200});

    } catch (error) {
        return NextResponse.json(`Error de servidor: ${error}`, {"status": 500});
    }

}
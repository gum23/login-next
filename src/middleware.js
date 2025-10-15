import {NextResponse} from "next/server";

export function middleware(req){
    //URL de login
    const loginURL = new URL("/", req.url);

    //Obtenemos la cookie del token
    const token = req.cookies.get("token")?.value;
    
    //Si no existe token, se redirige a login
    if(!token){
        return NextResponse.redirect(loginURL);
    }

    //Si hay token dejamos pasar
    return NextResponse.next();
}

//Aplicamos protección a rutas
export const config = {
    matcher: ["/users"]
}
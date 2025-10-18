import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "./config";

export const createHash = async (password) => {
    return await bcrypt.hash(password, bcrypt.genSaltSync(10));
}

export const compareHashAndPass = (passwordInsert, user) => {
    return bcrypt.compareSync(passwordInsert, user.password);
}

// Generación y corroboración de tokens JWT
export function signToken(payload){
    return jwt.sign(payload, `${config.jwt_secret}`, { expiresIn: "1d" });
}

export function verifyToken(token){
    try {
        return jwt.verify(token, `${config.jwt_secret}`);
    } catch (error) {
        return null;
    }
}

//Creación de token para lin de recupero de contraseña
export function createResetToken(userId){
    return jwt.sign({id: userId}, `${config.jwt_secret}`, { expiresIn: "2m" });
}
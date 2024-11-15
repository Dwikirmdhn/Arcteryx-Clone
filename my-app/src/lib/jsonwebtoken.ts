import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "darurat";

export const signToken = (payload: JwtPayload) => jwt.sign(payload, JWT_SECRET_KEY);

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET_KEY);

export const verifyTokenJose = async <T>(token: string) => {
    const secretKey = new TextEncoder().encode(JWT_SECRET_KEY);
    const payloadJose = await jose.jwtVerify<T>(token, secretKey);

    return payloadJose.payload;
};
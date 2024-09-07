import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthUser } from "../../../prep-master-types/types";
import sql from "../../db";

export const AuthMiddlware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.substring(7);

    if (!token)
        return res.status(400).json({error: "Auth token missing."});
    
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "") as AuthUser;
        req.body.user = decodedToken;

        const [user] = await sql`
            SELECT * FROM users WHERE username = ${decodedToken.username} LIMIT 1
        `;

        if (!user)
            return res.status(404).json({error: "User no longer exists."});

        if (!decodedToken.verified)
            return res.status(403).json({error: "User is unverified."});
        
        return next();

    } catch (e) {
        console.log("[auth-middleware]", e);
        return res.status(401).json({error: "Session expired, please log in again."})
    }
}
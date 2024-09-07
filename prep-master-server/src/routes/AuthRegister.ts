import { Request, Response } from "express";
import { AuthRegisterBody, AuthUser } from '../../../prep-master-types/types';
import jwt from "jsonwebtoken";
import sql from "../../db";
import bcrypt from 'bcrypt';
const jwtSecret = process.env.JWT_SECRET || "";

export const AuthRegister = async (req: Request, res: Response) => {
    const body: AuthRegisterBody = req.body;
    console.log("[register-route]", body);

    const existingUsers = await sql`
        SELECT * FROM users WHERE username = ${body.username}
    `;

    if (existingUsers.length > 0)
        return res.status(409).json({error: "A user with this username already exists."});

    const hashedPassword = await bcrypt.hash(body.password, 10);
    
    const [createdUser] = await sql`
        INSERT INTO users (username, fullname, role, password, verified)
        VALUES (${body.username}, ${body.fullname}, ${body.role}, ${hashedPassword}, TRUE)
        RETURNING *;
    `;

    const user: AuthUser = {
        username: createdUser.username,
        fullname: createdUser.fullname,
        role: createdUser.role,
        verified: createdUser.verified,
    };
    
    console.log("[register-route]", {jwtSecret});
    const token = jwt.sign(user, process.env.JWT_SECRET || "", {expiresIn: '1d'});
    console.log("[register-route]", {token});
    
    return res.send({success: true});
}
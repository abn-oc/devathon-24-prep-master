import { Request, Response } from "express";
import { AuthLoginBody, AuthUser } from '../../../prep-master-types/types';
import jwt from "jsonwebtoken";
import sql from "../../db";
import bcrypt from 'bcrypt';

export const AuthLogin = async (req: Request, res: Response) => {
    const body: AuthLoginBody = req.body;
    console.log("[login-route]", body);

    const [user] = await sql`
        SELECT * FROM users WHERE username = ${body.username}
    `;

    if (!user) {
        return res.status(401).json({ error: "Invalid username or password." });
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid username or password." });
    }

    const authUser: AuthUser = {
        username: user.username,
        fullname: user.fullname,
        role: user.role,
        verified: user.verified,
    };

    const token = jwt.sign(authUser, process.env.JWT_SECRET || "", { expiresIn: '1d' });
    console.log("[login-route]", { token });

    return res.json({ token });
}

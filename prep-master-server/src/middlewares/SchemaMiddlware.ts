import { NextFunction, Request, Response } from "express";
import Joi from "joi";

interface Schema {
    [index: string]: Joi.ObjectSchema
};

const schemas: Schema = {
    ["/login"]: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    ["/register"]: Joi.object({
        fullname: Joi.string().required(),
        username: Joi.string().required().pattern(/^[^\s]+$/).messages({"string.pattern.base": "Username cannot contain spaces"}),
        role: Joi.string().valid('student', 'teacher', 'admin').required(),
        password: Joi.string().required(),
    }),
    ["/tests/create"]: Joi.object({
        title: Joi.string().min(1).max(255).required(),
        author: Joi.string().min(1).max(255).required(),
        category: Joi.string().min(1).max(255).required(),
        mcqs: Joi.array().items(Joi.object({
            statement: Joi.string().required(),
            optionA: Joi.string().required(),
            optionB: Joi.string().required(),
            optionC: Joi.string().required(),
            optionD: Joi.string().required(),
            correct: Joi.string().valid('A', 'B', 'C', 'D')
        })).min(1).required(),
    })}

export const SchemaMiddlware = (req: Request, res: Response, next: NextFunction) => {
    console.log("[schema-middleware]", req.url);
    const schemaError = schemas[req.url]?.validate(req.body).error;

    if (schemaError)
        return res.status(400).json({error: schemaError.details.map(detail => detail.message).join(". ")});

    return next();
}
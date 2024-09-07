import { Request, Response } from 'express';
import { Test, MCQ } from '../../../prep-master-types/types';
import sql from '../../db';

export const TestsCreate = async (req: Request, res: Response) => {
    const { title, author, category, mcqs }: Test = req.body;

    try {
        const [testResult] = await sql`
            INSERT INTO tests (title, author, category)
            VALUES (${title}, ${author}, ${category})
            RETURNING id
        `;

        const testId = testResult.id;

        for (const mcq of mcqs) {
            await sql`
                INSERT INTO mcqs (test_id, statement, optionA, optionB, optionC, optionD, correct)
                VALUES (${testId}, ${mcq.statement}, ${mcq.optionA}, ${mcq.optionB}, ${mcq.optionC}, ${mcq.optionD}, ${mcq.correct})
            `;
        }

        res.status(201).json({ message: "Test and MCQs created successfully" });
    } catch (error) {
        console.error("Error creating test:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

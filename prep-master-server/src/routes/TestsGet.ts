// import { Request, Response } from "express";
// import { Test, MCQ } from '../../../prep-master-types/types';
// import sql from "../../db";

// export const TestsGet = async (req: Request, res: Response) => {
//     try {
//         const tests = await sql`
//             SELECT * FROM tests WHERE teacher_id = ${req.body.teacherId};
//         `;

//         if (tests.length === 0) {
//             return res.status(404).json({ message: "No tests found" });
//         }

//         const testIds = tests.map(test => test.id);

//         const mcqs = await sql`
//             SELECT * FROM mcqs
//             WHERE test_id = ANY(${testIds});
//         `;

//         const mcqMap: { [key: number]: MCQ[] } = {};
//         mcqs.forEach((mcq) => {
//             if (!mcqMap[mcq.test_id]) {
//                 mcqMap[mcq.test_id] = [];
//             }
//             mcqMap[mcq.test_id].push({
//                 question: mcq.question,
//                 optionA: mcq.optionA,
//                 optionB: mcq.optionB,
//                 optionC: mcq.optionC,
//                 optionD: mcq.optionD,
//                 correct: mcq.correct
//             });
//         });

//         const response: Test[] = tests.map(test => ({
//             title: test.title,
//             author: test.author,
//             category: test.category,
//         }));

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error("Error fetching tests:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

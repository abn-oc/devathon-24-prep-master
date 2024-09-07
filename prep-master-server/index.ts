import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import sql from './db';
import { AuthRegister } from './src/routes/AuthRegister';
import { SchemaMiddlware } from './src/middlewares/SchemaMiddlware';
import { AuthMiddlware } from './src/middlewares/AuthMiddleware';
import { AuthLogin } from './src/routes/AuthLogin';
import { TestsCreate } from './src/routes/TestsCreate';
import { TestsGet } from './src/routes/TestsGet';

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(SchemaMiddlware);

app.get('/', async (req, res) => {
    const response = await sql`SELECT * FROM users`;
    return res.json(response);
});

app.post('/', (req, res) => {
    return res.send(req.body);
});

app.post('/verify', AuthMiddlware, (req, res) => res.status(200).send({success: true}));
app.post('/register', AuthRegister);
app.post('/login', AuthLogin);
app.post('/tests/create', AuthMiddlware, TestsCreate);
app.post('/tests', AuthMiddlware, TestsGet);

app.listen(port, () => {
    console.log(`Server listening on :${port}`);
});

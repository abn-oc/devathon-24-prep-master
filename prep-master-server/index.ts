import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.post('/', (req, res) => {
  return res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on :${port}`);
});

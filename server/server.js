import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/src', express.static(path.resolve(__dirname, '../client/src')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
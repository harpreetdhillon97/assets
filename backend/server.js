import express from 'express';
import cors from 'cors';
import assetsRouter from './routes/assets.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/assets', assetsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
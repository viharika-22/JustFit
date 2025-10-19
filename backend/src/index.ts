import db from './services/db';
import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './routes/health';

dotenv.config();

// ensure a simple table (example)
db.prepare(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`).run();

const app = express();
app.use(express.json());

// mount health route
app.use('/health', healthRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`);
});

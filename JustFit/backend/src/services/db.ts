// src/services/db.ts
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = process.env.SQLITE_FILE || path.join(__dirname, '../../data/dev.sqlite');
const db = new Database(dbPath);

export default db;

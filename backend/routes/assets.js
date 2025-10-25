import express from 'express';
import { initDB } from '../db.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const db = await initDB();
  const assets = await db.all('SELECT * FROM assets');
  res.json(assets);
});

router.get('/:category', async (req, res) => {
  const db = await initDB();
  const { category } = req.params;
  const assets = await db.all('SELECT * FROM assets WHERE category = ?', [category]);
  res.json(assets);
});

export default router;
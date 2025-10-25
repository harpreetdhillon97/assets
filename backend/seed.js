import fs from 'fs';
import { initDB } from './db.js';

const seed = async () => {
  const db = await initDB();
  const data = JSON.parse(fs.readFileSync('./assets.json', 'utf-8'));

  for (const a of data) {
    await db.run(
      'INSERT OR REPLACE INTO assets (id, nickname, category, subcategory, balance) VALUES (?, ?, ?, ?, ?)',
      [
        a.assetId,
        a.nickname,
        a.primaryAssetCategory,
        a.wealthAssetType,
        a.balanceCurrent
      ]
    );
  }

  console.log('✅ Assets seeded successfully.');
};

seed();
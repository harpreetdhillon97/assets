import React, { useEffect, useState } from 'react';
import { fetchAssets } from '../api';

export default function AssetTable() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets().then(setAssets);
  }, []);

  const grouped = assets.reduce((acc, a) => {
    acc[a.category] = acc[a.category] || {};
    acc[a.category][a.subcategory] = acc[a.category][a.subcategory] || [];
    acc[a.category][a.subcategory].push(a);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Asset Overview</h2>
      {Object.entries(grouped).map(([cat, subcats]) => (
        <div key={cat} className="mb-4">
          <h3 className="text-xl font-bold">{cat}</h3>
          {Object.entries(subcats).map(([sub, items]) => (
            <div key={sub} className="ml-4 mt-2">
              <h4 className="font-medium">{sub}</h4>
              <ul className="ml-4 list-disc">
                {items.map(a => (
                  <li key={a.id}>
                    {a.nickname} — <strong>${a.balance.toLocaleString()}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
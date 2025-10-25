import axios from 'axios';

export const fetchAssets = async () => {
  const res = await axios.get('http://localhost:5000/api/assets');
  return res.data;
};
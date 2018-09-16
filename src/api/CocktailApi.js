import axios from 'axios';

const API_URL = 'http://localhost:3001';
/* eslint-disable-next-line */
export const fetchCocktails = async () => {
  const response = await axios.get(`${API_URL}/cocktails`);
  return response.data;
};

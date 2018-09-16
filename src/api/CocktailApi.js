import axios from 'axios';
import variables from '../variables';
/* eslint-disable-next-line */
export const fetchCocktails = async () => {
  const response = await axios.get(`${variables.API_URL}/cocktails`);
  return response.data;
};

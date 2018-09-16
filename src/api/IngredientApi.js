import axios from 'axios';
import variables from '../variables';

export const fetchIngredients = async () => {
  const response = await axios.get(`${variables.API_URL}/ingredients`);
  return response.data;
};

export const saveIngredient = async (ingredientToSave) => {
  const response = await axios.post(`${variables.API_URL}/ingredients`, ingredientToSave);
  return response.data;
};

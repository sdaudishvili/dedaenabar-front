import buildQuery from '@/utils/buildQuery';
import { get, post } from './dataProvider';

export const config = {
  foods: 'food/food',
  drinks: 'drink/drink',
  register: 'Visitor/register',
  visa: 'Visa/register'
};

export const getFoods = () => get(config.foods);
export const getDrinks = () => get(config.drinks);
export const register = (file, values) => post(`${config.register}${buildQuery(values, false)}`, file);
export const getVisa = (payload) => post(config.visa, payload);

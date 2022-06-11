import buildQuery from '@/utils/buildQuery';
import { get, post } from './dataProvider';

export const config = {
  foods: 'food/food',
  drinks: 'drink/drinks',
  addons: 'addons/addons',
  register: 'Visitor/register',
  visa: 'Visa/register'
};

export const getFoods = () => get(config.foods);
export const getDrinks = () => get(config.drinks);
export const getAddons = () => get(config.addons);
export const register = (file, values) => post(`${config.register}${buildQuery(values, false)}`, file);
export const getVisa = (payload) => post(config.visa, payload);

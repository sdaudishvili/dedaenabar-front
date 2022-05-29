import { get, post } from './dataProvider';

export const config = {
  foods: 'food/food',
  drinks: 'drink/drink',
  register: 'Visitor/register'
};

export const getFoods = () => get(config.foods);
export const getDrinks = () => get(config.drinks);
export const register = () => post(config.register);

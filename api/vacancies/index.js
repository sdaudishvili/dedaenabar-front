import { getMany, getOneBySlug } from '@/api/dataProvider';
import { config } from './config';

export const getVacancies = (options) => {
  return getMany(config.vacancies, options);
};

export const getSingleVacancy = (slug, query = {}) => {
  return getOneBySlug(config.vacancies, slug, query);
};

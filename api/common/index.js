import { get } from '@/api/dataProvider';
import { config } from './config';

export const getHomePageContent = (query) => {
  return get(config.homeContent, query);
};

export const getAnalytics = () => {
  return get(config.analytics);
};

export const getOpengraph = (query) => {
  return get(config.opengraph, query);
};

export const getSocialLinks = () => {
  return get(config.sociallinks);
};

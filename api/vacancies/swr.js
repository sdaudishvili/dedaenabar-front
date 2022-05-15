import useSWR from 'swr';
import { fetcher } from '@/api/fetcher';
import buildQuery from '@/utils/buildQuery';
import { config } from './config';

const defaultSwrOptions = { fallbackData: {} };

export const useVacacies = (options, swrOptions = defaultSwrOptions) => {
  const { data: result } = useSWR(`${config.vacancies}${buildQuery(options)}`, fetcher, swrOptions);

  const { data: items = [], meta: { total = 0 } = {} } = result;

  return { items, total };
};

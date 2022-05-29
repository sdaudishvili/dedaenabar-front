import { axiosRemote as axios } from '@/utils/axios';
import buildQuery from '@/utils/buildQuery';
import { handleError, handleSuccess } from './handler';

export const get = async (resource, query = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/${resource}${buildQuery(query)}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject));
  });
};

export const post = async (resource, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`/${resource}`, payload).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

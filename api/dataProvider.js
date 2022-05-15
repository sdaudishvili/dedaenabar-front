import { axiosRemote as axios } from '@/utils/axios';
import buildQuery from '@/utils/buildQuery';
import { handleError, handleSuccess } from './handler';

export const getMany = async (resource, query = {}, throwError = false) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/${resource}${buildQuery(query)}`)
      .then(handleSuccess(resolve, reject, true))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({ items: [], total: 0 }))));
  });
};

export const getOne = async (resource, id, throwError = false) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/${resource}/${id}`)
      .then(handleSuccess(resolve, reject))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({}))));
  });
};

export const getOneBySlug = async (resource, slug, query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/${resource}/${slug}/details${buildQuery(query)}`)
      .then(handleSuccess(resolve, reject))
      .catch(handleError(reject));
  });
};

export const get = async (resource, query = {}, throwError = false) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/${resource}${buildQuery(query)}`)
      .then(handleSuccess(resolve, reject))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({}))));
  });
};

export const post = async (resource, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`/${resource}`, payload).then(handleSuccess(resolve, reject)).catch(handleError(reject));
  });
};

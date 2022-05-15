export const handleSuccess =
  (resolve, reject, isMany = false) =>
  (response) => {
    if (response.status === 204) return reject();
    if (isMany) {
      const { data: items = [], meta: { total = 0 } = {} } = response.data;
      return resolve({ items, total });
    }
    return resolve(response.data);
  };

export const handleError = (reject) => (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (data) {
      return reject({ status, data });
    }
  }
  return reject(error);
};

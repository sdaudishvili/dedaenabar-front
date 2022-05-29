export const handleSuccess = (resolve) => (response) => {
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

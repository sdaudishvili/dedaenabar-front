export const withDefaultProps = (cb) => async (context) => {
  return cb(context, {});
};

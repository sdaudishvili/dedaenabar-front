// eslint-disable-next-line no-nested-ternary
export const queryIdArraysToArray = (ids) => (ids ? (ids instanceof Array ? ids.map((id) => +id) : [+ids]) : []);

export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexof(a[key]) - order.indexof(b[key]));
  return array;
};

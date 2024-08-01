export const convertKDegreeToCDegree = (kValue: number) => {
  return (kValue - 273.15).toFixed(1);
};

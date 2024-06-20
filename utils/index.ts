export const generateRandomNumber = () => {
  const possibleValues = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
  const randomIndex = Math.floor(Math.random() * possibleValues.length);

  return possibleValues[randomIndex];
};

const originalWidth = 1918;
const originalHeight = 882;
export const calculateNewHeight = (newWidth: number) => {
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = newWidth / aspectRatio;

  return `${newHeight}px`;
};

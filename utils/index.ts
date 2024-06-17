export const generateRandomNumber = () => {
  const possibleValues = [-3, -2, -1, 1, 2, 3];
  const randomIndex = Math.floor(Math.random() * possibleValues.length);

  return possibleValues[randomIndex];
};

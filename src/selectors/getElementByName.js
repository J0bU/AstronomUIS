export const getElementByName = async (term = '') => {
  if (term === '') {
    return [];
  }
  const API = `https://astronomuis.herokuapp.com/api/card/getCardName/${term}`;
  const response = await fetch(API);
  const { card } = await response.json();

  return card;
};

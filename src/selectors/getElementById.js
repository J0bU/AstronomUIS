export const getElementById = async id => {
  const API = `https://astronomuis.herokuapp.com/api/card/getCard/${id}`;
  const response = await fetch(API);
  const { card } = await response.json();
  return card;
};

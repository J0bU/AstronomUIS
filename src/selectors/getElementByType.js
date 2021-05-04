export const getElementByType = async search => {
  const API = `https://astronomuis.herokuapp.com/api/card/getCards/${search}`;
  const response = await fetch(API);
  const { cards } = await response.json();

  const cardsFormated = cards.map(card => {
    return {
      id: card._id,
      bestViewed: card.bestViewed,
      brightestStar: card.brightestStar,
      cardImage: card.cardImage,
      clusterType: card.clusterType,
      constellationName: card.constellationName,
      largestConstellation: card.largestConstellation,
      neighboringConstellations: card.neighboringConstellations,
      zodiacConstellation: card.zodiacConstellation
    };
  });
  return cardsFormated;
};

export const getNasaImages = async search => {
  // Http request

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=DEMO_KEY`;

  const response = await fetch(url);

  const { photos } = await response.json();

  const result = photos.map(element => {
    return {
      id: element.id,
      camera: element.camera.full_name,
      img: element.img_src,
      rover: element.rover.name,
      date: element.earth_date,
      status: element.rover.status
    };
  });

  return result;
};

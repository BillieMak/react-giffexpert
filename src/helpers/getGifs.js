export const getGifs = async (category) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=Z7RQlQD6K6ZlkjtZ7Ezm2CKtAUYW7PV3&q=${category}&limit=13`;
  
      const res = await fetch(url);
      const { data } = await res.json();
  
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }));
      return gifs;
      // console.log(gifs);
    } catch (error) {
      console.log(error);
    }
  };
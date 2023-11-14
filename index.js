const fetch = require("node-fetch");
require("dotenv").config();

async function getImages(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.API_KEY}&${query}&limit=1&offset=0`;

  const response = await fetch(endpoint);
  const data = await response.json();
  console.log("data: " + data);
  return data;
}

getImages("q=dog");

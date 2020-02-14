import twitterData from "./example.json";

// Temp mockup to use example data provided by Meshify.
// Real world use would use Axios to GET a authenticated response from the API, wrapped in a promise

const TwitterService = {
  fetchData(searchString) {
    console.log(searchString); // Would use this value to submit a search on the actual twitter API
    return twitterData;
  }
};

export { TwitterService };

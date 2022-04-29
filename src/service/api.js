const axios = require("axios");

const baseURL = "https://api.themoviedb.org/3";
const api_key = "f5a4130ffbf5af6a0dc17e45671898d0";
const language = "en-US"

const api = axios.create({
    baseURL: baseURL,     
    params: {
        api_key: api_key,
        language: language
    }
});

module.exports = api;
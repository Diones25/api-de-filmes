import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const api_key = "";
const language = "pt-BR"

const api = axios.create({
    baseURL: baseURL,     
    params: {
        api_key: api_key,
        language: language
    }
});

export default api;
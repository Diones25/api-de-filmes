const api = require("../service/api");

const getFilmesRecentes = async (req, res) => {
    await api.get(`movie/latest`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);    
    });
}

module.exports = {
    getFilmesRecentes
}

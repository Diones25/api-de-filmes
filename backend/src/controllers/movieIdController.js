import api from "../service/api.js";

const getDetalheFilmeId = async (req, res) => {
  const id = req.params.id;
  await api
    .get(`/movie/${id}`)
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Filmes não encontrado!" });
    });
};

export default {
    getDetalheFilmeId,
}
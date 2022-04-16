const router = require('express').Router();
const axios = require("axios").default;
module.exports = (db) => {
  // all routes will go here 

  router.get('/:id/days/:day_id', (req, res) => {
    const id = req.params.id;
    const day_id = req.params.day_id;
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=${day_id}`).then((response) => {
      res.json(response.data);
    }).catch((error) => {
      console.error(error);
    });
  });

  return router;
}
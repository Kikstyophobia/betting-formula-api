const axios = require("axios")
const express = require('express');
const router = express.Router();

// 686488

const API_KEY = process.env.API_KEY

router.get(`/:stage`, (req, res) => {
  const { stage } = req.params
  const url = `https://api.sportradar.com/formula1/trial/v2/us/sport_events/sr:stage:${stage}/probabilities.json?api_key=${API_KEY}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router
const axios = require("axios")
const express = require('express');
const router = express.Router();


const API_KEY = process.env.API_KEY
const url = `https://api.sportradar.com/formula1/trial/v2/us/sport_events/sr:stage:686488/probabilities.json?api_key=${API_KEY}`;

router.get(`/`, (req, res) => {
  const apiReq = axios.get(url)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router
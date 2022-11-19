const axios = require("axios")
const express = require('express');
const router = express.Router();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY2 = process.env.REACT_APP_API_KEY2;

const seasons = [
  {
    id: '937183',
    year: '2022'
  },
  {
    id: '686252',
    year: '2021'
  },
  {
    id: '547803',
    year: '2020'
  }
];


// http://localhost:8080/api 
// Search races by season
router.get(`/season/:yearId`, (req, res) => {
  const { yearId } = req.params;

  const url = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:${yearId}/schedule.json?api_key=${API_KEY2}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    })
})

// Search Race in Season
// router.get(`/:season/:stage`, (req, res) => {
router.get(`/:stage`, (req, res) => {
  const { stage } = req.params;
  const url = `https://api.sportradar.com/formula1/trial/v2/us/sport_events/sr:stage:${stage}/probabilities.json?api_key=${API_KEY2}`;
  console.log(url)
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    })
})

// Search Race Result by Race
router.get(`/result/:stage`, (req, res) => {
  const { stage } = req.params;
  const url = `https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:${stage}/summary.json?api_key=${API_KEY2}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router
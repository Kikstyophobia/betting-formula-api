const axios = require("axios")
const express = require('express');
const router = express.Router();

const stages = [
  {
    id: "686270",
    race: "Australian Grand Prix"
  },
  {
    id: "686488",
    race: "Bahrain Grand Prix"
  },
  {
    id: "686708",
    race: "Chinese Grand Prix"
  },
  {
    id: "686938",
    race: "Portuguese Grand Prix"
  },
  {
    id: "687156",
    race: "Grand Permio de Espana"
  },
  {
    id: "687374",
    race: "Grand Prix de Monaco"
  },
  {
    id: "687592",
    race: "Azerbaijan Grand Prix"
  },
  {
    id: "687822",
    race: "Grand Prix du Canada"
  },
  {
    id: "688040",
    race: "Grand Prix de France"
  },
  {
    id: "688270",
    race: "Grosser Preis von Osterreich"
  },
  {
    id: "688718",
    race: "Magyar Nagydij"
  },
  {
    id: "688948",
    race: "Belgian Grand Prix"
  },
  {
    id: "689190",
    race: "Dutch Grand Prix"
  },
  {
    id: "689638",
    race: "Russian Grand Prix"
  },
  {
    id: "689868",
    race: "Singapore Grand Prix"
  },
  {
    id: "690098",
    race: "Japanese Grand Prix"
  },
  {
    id: "690316",
    race: "United States Grand Prix"
  },
  {
    id: "690534",
    race: "Gran Premio de Mexico"
  },
  {
    id: "690994",
    race: "Saudi Arabian Grand Prix"
  },
  {
    id: "691212",
    race: "Abu Dhabi Grand Prix"
  },
  {
    id: "694172",
    race: "Imola Grand Prix"
  },
  {
    id: "705016",
    race: "Turkish Grand Prix"
  },
  {
    id: "707680",
    race: "Styrian Grand Prix"
  },
  {
    id: "710452",
    race: "British Grand Prix"
  },
  {
    id: "718612",
    race: "Gran Premio d'Italia" 
  },
  {
    id: "725502",
    name: "Qatar Grand Prix"
  },
  {
    id: "730408",
    name: "Grande Premio do Brasil"
  }
];

const API_KEY = process.env.API_KEY

router.get(`/:stage`, (req, res) => {
  const { stage } = req.params;
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
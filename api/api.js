const { default: axios } = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");

const router = express.Router();

router.use(bodyParser.json());

const apiURL = config.get("apiUrl");
const apiKey = config.get("apiKey");

router.get("/", (req, res) => {
  res.status(200).send("API Endpoint is working !!!");
});

router.get("/:title", (req, res) => {
  const { title } = req.params;
  if (title)
    try {
      axios.get(`${apiURL}/?apikey=${apiKey}&s=${title}`).then(({ data }) => {
        res.send(data);
      });
    } catch (error) {
      console.error(error);
    }
});

module.exports = router;

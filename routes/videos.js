const express = require("express");
const router = express.Router();
const fs = require('fs');

// videos.json file stored in a variable
const videosJSONFile= fs.readFileSync('./data/videos.json');
// parsing the buffer data after fs.readFileSync
const vidArrParsed = JSON.parse(videosJSONFile);

//GET request for '/videos'.
// Returns an array of video objects
// Contains only enough information to display in side bar
router.get('/', (req, res) => {
    //accessing videos object to send as response
    const vidArrResponse = vidArrParsed.videos;
    // sending the json data back as response
    res.json(vidArrResponse);
  })

  module.exports = router;
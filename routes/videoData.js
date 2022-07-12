const express = require("express");
const router = express.Router();
const fs = require('fs');

// videos.json file stored in a variable
const videosJSONFile= fs.readFileSync('./data/videos.json');
// parsing the buffer data after fs.readFileSync
const vidArrParsed = JSON.parse(videosJSONFile);


//GET request for '/videos/videoId'.
// videoId will be swapped out with the id of a video as found in the list of videoDetails
// Returns a detailed object of a single video
// Details include the list of comments for that video
router.get('/:videoId', (req, res) => {
    const requestedVideoId = req.params.videoId;
    const vidDetailsArr = vidArrParsed.videoDetails;
    const requestedVideo = vidDetailsArr.find(video => video.id === requestedVideoId)
  
    if (!requestedVideo) {
      res.status(404).send('Video not found');
      return;
    }
  
    res.status(200).json(requestedVideo);
  })

  module.exports = router;
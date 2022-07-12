const express = require("express");
const app = express();
const fs = require('fs');
// videos.json file stored in a variable
const videosJSONFile= fs.readFileSync('./data/videos.json');
// parsing the buffer data after fs.readFileSync
const vidArrParsed = JSON.parse(videosJSONFile);

//GET request for '/videos'.
// Returns an array of video objects
// Contains only enough information to display in side bar
app.get('/videos', (req, res) => {
  //accessing videos object to send as response
  const vidArrResponse = vidArrParsed.videos;
  // sending the json data back as response
  res.json(vidArrResponse);
})

//GET request for '/videos/videoId'.
// videoId will be swapped out with the id of a video as found in the list of videoDetails
// Returns a detailed object of a single video
// Details include the list of comments for that video
app.get('/videos/:videoId', (req, res) => {
  const requestedVideoId = req.params.videoId;
  const vidDetailsArr = vidArrParsed.videoDetails;
  const requestedVideo = vidDetailsArr.find(video => video.id === requestedVideoId)

  if (!requestedVideo) {
    res.status(404).send('Video not found');
    return;
  }

  res.status(200).json(requestedVideo);
})


app.listen(8080, function() {
    console.log(`Server fired up on port 8080 🫡`);
  });
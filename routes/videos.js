const express = require("express");
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// Using uniqueNamesGenerator npm library for channel names
const { uniqueNamesGenerator, Config, names, adjectives } = require('unique-names-generator');

const readVideos = () => {
  // videos.json file stored in a variable
  // parsing the buffer data after fs.readFileSync
  const videosJSONFile= fs.readFileSync('./data/videos.json');
  const vidArrParsed = JSON.parse(videosJSONFile);
  return vidArrParsed;
}

//GET request for '/videos'.
// Returns an array of video objects
// Contains only enough information to display in side bar
router.get('/videos', (req, res) => {
    //accessing videos object to send as response
    const vidArr = readVideos();
    const videosResponse = vidArr.map(vid => { 
        return {
          id: vid.id,
          title: vid.title,
          channel: vid.channel,
          image: vid.image
        }
    })
    res.json(videosResponse);
})

//GET request for '/videos/videoId'.
// videoId will be swapped out with the id of a video as found in the list of videoDetails
// Returns a detailed object of a single video
// Details include the list of comments for that video
router.get('/videos/:videoId', (req, res) => {
    const requestedVideoId = req.params.videoId;
    const vidDetailsArr = readVideos();
    const requestedVideo = vidDetailsArr.find(video => video.id === requestedVideoId)
  
    if (!requestedVideo) {
      res.status(404).send('Video not found');
      return;
    }
  
    res.status(200).json(requestedVideo);
})

const randomName = uniqueNamesGenerator({ 
  dictionaries: [adjectives, names],
  separator: ' ',
  style: 'capital', 
});

// POST request for /videos that will add a new video to the video list. 
// A unique id must be generated for each video added.
router.post('/videos', (req, res) => {
  const { title, description } = req.body;
  if(!title || !description) {
    return res.status(400).send('Title and description are required fields');
  }
  
  const vidArr = readVideos();


  const newVideo = {
    title,
    channel: randomName,
    image: "https://i.imgur.com/x2GmdlK.jpeg",
    description,
    views: "0",
    likes: "0",
    duration: `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)+1}`,
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
    id: uuidv4(),
  };

  vidArr.push(newVideo);

  fs.writeFileSync('./data/videos.json', JSON.stringify(vidArr));
  res.status(201).json(vidArr);

})

// DELETE request for /video/:videoId

module.exports = router;
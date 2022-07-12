const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos');
const videoDataRoutes = require('./routes/videoData')


app.use('/videos', videoRoutes);
app.use('/videos', videoDataRoutes);



app.listen(8080, () => {
    console.log(`Server fired up on port 8080 🫡`);
  });
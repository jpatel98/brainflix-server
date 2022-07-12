const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos');


app.use('/videos', videoRoutes);



app.listen(8080, () => {
    console.log(`Server fired up on port 8080 🫡`);
  });
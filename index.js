const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos');
const cors = require('cors');

app.use(express.json());
app.use(express.static('./public'));
app.use(cors());


app.use('/', videoRoutes);

app.listen(8080, () => {
    console.log(`Server fired up on port 8080 🫡`);
});
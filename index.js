const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //EXECUTES EVERYTHING IN PASSPORT FILE

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

//IF HEROKU SETS PORT, USE IT, OTHERWISE USE 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);


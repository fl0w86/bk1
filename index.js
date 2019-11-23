const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Item');
require('./services/passport'); //EXECUTES EVERYTHING IN PASSPORT FILE

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//ITEM ROUTES
require('./routes/itemRoutes')(app);

//ROUTE HANDLING IN PROD
if (process.env.NODE_ENV === 'production') {
    //EXPRESS WILL SERVE ASSETS LIKE MAIN.JS
    app.use(express.static('client/build'));
    //EXPRESS SERVES INDEX.HTML IF ROUTE UNKNOWN
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//IF HEROKU SETS PORT, USE IT, OTHERWISE USE 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);


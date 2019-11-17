const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

//ROUTE HANDLER
passport.use(new GoogleStrategy());

//IF HEROKU SETS PORT, USE IT, OTHERWISE USE 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//ROUTE HANDLER
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' //HANDLING AUTH ROUTE REDIRECT
}, (accessToken, refreshToken, profile, done) => { //CREATE NEW USER WITH USER SCHEMA
    new User({
        googleId: profile.id
    }).save(); //save(); saved USER TO MONGODB
}));
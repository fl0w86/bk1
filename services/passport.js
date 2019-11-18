const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})


//ROUTE HANDLER
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' //HANDLING AUTH ROUTE REDIRECT
}, (accessToken, refreshToken, profile, done) => { //CREATE NEW USER WITH USER SCHEMA
    User.findOne({
        googleId: profile.id
    })
        .then(existingUser => {
            if (existingUser) {
                //THERE IS AN EXISTING USER
                done(null, existingUser);
            } else {
                new User({
                    googleId: profile.id
                }).save() //save() saved USER TO MONGODB
                    .then(user => done(null, user))
            }
        })


}));
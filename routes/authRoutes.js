const passport = require('passport');

const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {  //HANDLE AUTH ROUTE APP -> PASSPORT -> GOOGLE
        scope: ['profile', 'email']
    }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    ) //HANDLE REDIRECT NACH ERFOLGREICHER AUTH  

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => { //FOR USER AUTH TESTING
        res.send(req.user);
    })

    app.get('/api/secret', requireLogin, (req, res) => { //TEST MIT MIDDLEWARE UND ROUTE PROTECTION MIT DATABASE

    })
}



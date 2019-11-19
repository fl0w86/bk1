const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {  //HANDLE AUTH ROUTE APP -> PASSPORT -> GOOGLE
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google')) //HANDLE REDIRECT NACH ERFOLGREICHER AUTH  

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => { //FOR USER AUTH TESTING
        res.send(req.user);
    })
}



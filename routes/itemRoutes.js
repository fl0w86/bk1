const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Item = mongoose.model('items')

module.exports = app => {
    app.post('/api/items', requireLogin, async (req, res) => {

        const { name, description, price, tag } = req.body;

        const item = new Item({
            name: name,
            description: description,
            price: price,
            tag: tag.split(',').map(tag => { return { tag: tag } }),
            _user: req.user.id
        })
        try {
            await item.save();
        } catch (err) {
            res.status(422).send(err);
        }
    })

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const items = await Item.find({ _user: req.user.id });
        // .select({tag: false}) //KÖNNTE ICH SETZEN UM TAG PROPERTY NICHT IN RES ZU INCLUDEN, FALLS NICHT IM FRONT END GERENDERT

        res.send(items);
    })

}

//SO GELASSEN WEIL STEPHEN MIT MAILER ARBEITET, GGF AUF ÜBLICHEN SYNTAX REFACTOREN:
// const user = await new User({ googleId: profile.id }).save() //save() saved USER TO MONGODB
// done(null, user)
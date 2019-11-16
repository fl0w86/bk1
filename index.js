const express = require("express");
const app = express();

//ROUTE HANDLER
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

//IF HEROKU SETS PORT, USE IT, OTHERWISE USE 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
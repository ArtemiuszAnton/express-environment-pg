const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/skill.controller')

const app = express();

app.use(bodyParser.json());
app.use('/skills', route);


app.use((er, _req, res, _next) => {
    res.send(er.message);
})

module.exports = { app }
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express()
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require('express-session');

const sessionConfig = {
    saveUninitialized: true,
    secret: 'super-secret',
    resave: false,
    name: 'session',
    rolling: true,//updating cookie expiration time like online banking
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 160000,
    }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/testApp/dist/testApp'));
app.use(session(sessionConfig));
app.use(cookieParser('asdfasfdsafsafsafdasdfsdafsfasfsadf')); //should be an environment variable

require('./server/config/database');
require('./server/config/routes')(app);


// listener
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
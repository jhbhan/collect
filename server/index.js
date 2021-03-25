// Run the express app
require('dotenv/config');
const express = require('express');
const AppSettings = require('./AppSettings');
 cookieSession = require('cookie-session');
 session = require("express-session"),
 bodyParser = require("body-parser");
 passport = require('passport');
 request = require('request');
 mongoose = require('mongoose');
require('./models/User');
require('./passport');

mongoose.connect(AppSettings.mongodbConnect, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected'))
  .catch((err) => console.log(err));
  
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    cookieSession({
        maxAge: 30 *24*60*60*1000,//how long cookie lasts
        keys: [AppSettings.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());



//gets all the routes
require('./routes/routes')(app);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => console.log(`Zoom Hello World app listening at PORT: ${PORT}`));

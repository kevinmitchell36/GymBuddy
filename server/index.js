// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require("express-jwt"); 
const jwksRsa = require("jwks-rsa"); 
const router = express.Router();

//Initialize new instance of Express
const app = express();

// Use cors
app.use(cors());

//Body Parser
app.use(bodyParser.json());


//Require Database
const uri = require('./config/keys').MongoURI;

// Establish Connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


//Require routes
const routines = require('./routes/api/routines');
// const users = require('./routes/api/users');

app.use('/api/routines', routines);
// app.use('/api/users', users);

//Set sever
const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

//Auth0 configuration
const authConfig = require('./config/keys');

var options = {
  method: 'GET',
  url: `https://${authConfig.domain}/api/v2/users`,
  headers: {authorization: 'Bearer 5eadff362552bc08a47b764a'}
};

router.get(options, (req, res) => {
  console.log(res);
});

const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});



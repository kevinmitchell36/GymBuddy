const express = require('express');
const router = express.Router();
const Routine = require('../../models/Routine');
const jwt = require("express-jwt"); 
const jwksRsa = require("jwks-rsa"); 

const authConfig = require('../../config/keys.js');
const { findOne } = require('../../models/Routine');

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

router.get('/', checkJwt,  (req , res) => {
  const currentUser = req.user.sub;
  Routine.find({userId: currentUser}).then((routines) => {
    res.send(routines);
  });
});

router.get('/:id', checkJwt, (req, res) => {
  const id = req.params.id;
  Routine.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/', (req, res) => {
  const {name, wtype, categories, sets, reps, time, notes, userId} = req.body;
  const newRoutine = new Routine({
    name,
    wtype,
    categories,
    sets,
    reps,
    time,
    notes,
    userId
  });
  newRoutine.save()
  .then(routines => {
    res.send(routines)
  })
  .catch(err => console.log(err));
});

router.patch("/:id", (req, res) => {
  Routine.findOne({
    _id: req.params.id
  })
  .then(routine => {
    routine.name = req.body.name || routine.name;
    routine.wtype = req.body.wtype || routine.wtype;
    routine.categories = req.body.categories || routine.categories;
    routine.sets = req.body.sets || routine.sets;
    routine.reps = req.body.reps || routine.reps;
    routine.time = req.body.time || routine.time;
    routine.notes = req.body.notes || routine.notes;
    routine.userId = req.body.userId;
    routine.save()
      .then(routine => {
        res.send(routine)
      })
      .catch(err => console.log(err));
  });
});

router.delete("/:id", (req, res) => {
  Routine.deleteOne({_id: req.params.id})
    .then(() => {
      res.send("Deleted")
    })
})



module.exports = router;


const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
 /*  console.log(tweets) */
  res.render( 'index', { tweets: tweets } );
});

// digamos que el cliente pide un GET a /users/guille
router.get( '/users/:name', function (req, res) {
  let name = req.params.name;  // --> 'guille'
  let tweet = tweetBank.find({name:name});
  res.render( 'index', { tweets: tweet } );
});

module.exports = router;
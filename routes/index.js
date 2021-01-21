const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
 /*  console.log(tweets) */
  res.render( 'index', { tweets: tweets } );
});

router.get('/users', function (req, res) {
  let tweets = tweetBank.find();
  console.log("entre a users")
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
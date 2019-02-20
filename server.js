var pg = require("pg");
var express = require('express');
var router = require('router');
var path = require('path');
var app = express();

var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});
var connection_String = process.env.DATABASE_URLS;

app.get('/server', function(req, res, next) {
  var client = client || new pg.Client(connection_String);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * from public."Inventory"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      res.json(result.rows);
      // client.end();
    });
  });
});

  const port = process.env.PORT || 5001;
  app.listen(port);
console.log("connecting");

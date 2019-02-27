var pg = require("pg");
var express = require('express');
var router = require('router');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});
var connection_String = process.env.DATABASE_URLS;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//get all Table_Menu data
app.get('/menuserver', function(req, res, next) {
  var client = client || new pg.Client(connection_String);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * from public."MenuTable"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      res.json(result.rows);
      // client.end();
    });
  });
});
//get all Table_Inventory data
app.get('/server', function(req, res, next) {
  var client = client || new pg.Client(connection_String);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * from public."CrazyBakerSchema.Table_Inventory"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      res.json(result.rows);
      // client.end();
    });
  });
});
//insert into Table_Inventory data
app.post('/InsertInven', function(req, res, next) {
  var client = client || new pg.Client(connection_String);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    let querystring = "Insert into public."+"\"CrazyBakerSchema.Table_Inventory\""+"("+"\"name\","+"\"price\","+"\"type\","+"\"weight\","+"\"Quantity\","+"\"Description\") VALUES ";
    querystring = querystring + "('"+ req.body[0] +"'"+","+ req.body[1] +",'"+req.body[2]+"',"+req.body[3]+","+req.body[4]+",'"+req.body[5]+"')";
    client.query(querystring , function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      client.end();
    });
  });
});
//Edit/update into Table_Inventory
app.put('/UpdateInven', function(req, res, next) {
  var client = client || new pg.Client(connection_String);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  //   UPDATE public."CrazyBakerSchema.Table_Inventory"
	// SET "name"='Baking soda', "price"=31.9
	// WHERE "id"=1

    let querystring = "UPDATE public."+"\"CrazyBakerSchema.Table_Inventory\""+" SET "+"\"name\""+"='Baking machine',"+"\"price\""+"=109.8";
    querystring = querystring +" WHERE "+ "\"id\""+"=1";
    console.log(querystring );
    client.query(querystring , function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });
});

const port = process.env.PORT || 5001;
app.listen(port);
console.log("connecting");

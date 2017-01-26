// Standard stuff
var express = require( 'express' );
var path = require( 'path' );

var logger = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var app = express();

app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

var mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/family-tree');

var User = require('./models/user');

var bob = new User( {
  firstName: 'Bob',
  email: 'bob@ga.co',
  meta:{
    age: 27
  }
});

bob.sayHello();

bob.save( function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('User Created');
  }
});

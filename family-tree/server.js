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

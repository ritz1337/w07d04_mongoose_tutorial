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

// construct bob
var bob = new User( {
  firstName: 'Bob',
  email: 'bob@ga.co',
  meta:{
    age: 27
  }
});

bob.sayHello();

// save bob to db
bob.save( function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('User Created');
  }
});


//construct newUser
var newUser = new User({
  firstName: 'gerry',
  email: 'gerry@gmail.com',
  password: 'password'
});

// save newuser to db
newUser.save( function( err ) {
  if (err) {
    console.log( err );
  } else {
    console.log( 'User created!' );
  }
});

// Find All
// User.find( {}, function (err, users) {
//   if (err) {
//     console.log( err );
//   } else {
//     console.log( users );
//   }
// });

// // Find 'where'
// User.find( { firstName: 'gerry' }, function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// })

// user with ID of 588a59eca5cd74c8861e2b9e
User.findById( '588a59eca5cd74c8861e2b9e', function( err, user ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( user );
    }
});


// creating a user with a defined id

// only if _id exists in schema

// var userWithID = new User({
//   firstName: 'bhao',
//   email: 'jeyde@pockets.com',
//   password: 'password',
//   _id: 1
// });

// userWithID.save( function( err ) {
//   if (err) {
//     console.log( err );
//   } else {
//     console.log( 'User created!' );
//   }
// });

// User.findById( 1, function( err, user ) {
//     if ( err ) {
//         console.log( err );
//     } else {
//         console.log( user );
//     }
// });

User.findOneAndUpdate(
    { firstName: 'gerry' },
    { meta: { age: 29 } },
    function(err, user) {
        if ( err ) {
            console.log( err );
        } else {
            console.log( user );
        }
    });

var bhao = new User({
  firstName: 'bhao',
  lastName: 'Khao',
  email: 'vietcong@staircase.com',
  meta:
    {website: 'www.yourlootismine'}
});

// bhao.save(function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('User created');
//   }
// })

// User.findOneAndRemove(
//   { email: {$regex: 'vietcong'} },
//   function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Deleted')
//     }
//   })

// finding based on substring of a document field
User.find(
  { email: {$regex: 'vietcong@'}}, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  }
)

// removes a document based on substring of field
User.remove(
  {email: {$regex: 'vietcong@'}}, function(err, removed) {
    if (err) {
      console.log(err)
    } else {
      console.log(removed)
    }
  }
)





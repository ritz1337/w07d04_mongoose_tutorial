var mongoose = require( 'mongoose' );

// create a schema
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true},
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  },
  createdAt: Date,
  updatedAt: Date
});

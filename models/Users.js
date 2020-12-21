const mongoose = require('mongoose');
/* Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. 
js. It manages relationships between data, provides schema validation, and 
is used to translate between objects in code and the representation of those objects in MongoDB.*/

//Un usuario tendrá la siguiente estructura
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Exportamos el modelo de usuario creado
module.exports = mongoose.model('user', UserSchema);

// IMPORT MONGOOSE
const mongoose = require('mongoose');

// NAME DB
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/INTROVERT";


// OPEN NEW CONNECTION TO MongoDB, useNewUrlParser DISABLES DEPRACATION WARNING
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


// EXPORT MONGOOSE OBJECTS
module.exports = mongoose

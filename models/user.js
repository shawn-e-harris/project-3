// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const UserSchema = new mongoose.Schema({
 name: String
})

// CREATE COLLECTION API
const userCollection = mongoose.model('User', UserSchema)

// FUNCTIONS

// GET/ read
const getAllUsers = () => {
  return userCollection.find();
}

// GET/ read
const getOneUser = (userId) => {
  return userCollection.findById(userId)
}

// CREATE/ post
const addUser = (newUser) => {
  return userCollection.create(newUser)
}

// UPDATE/ edit
const updateUser = (userId, updatedUser) => {
  return userCollection.updateOne({_id: userId}, updatedUser)
}

// DELETE
const deleteUser = (userId) => {
  return userCollection.findByIdAndDelete(userId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
}

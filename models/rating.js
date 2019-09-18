// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const RatingSchema = new mongoose.Schema({
 name: String
})

// CREATE COLLECTION API
const ratingCollection = mongoose.model('Rating', RatingSchema)

// FUNCTIONS

// GET/ read
const getAllRatings = () => {
  return ratingCollection.find();
}

// GET/ read
const getOneRating = (ratingId) => {
  return ratingCollection.findById(ratingId)
}

// CREATE/ post
const addRating = (newRating) => {
  return ratingCollection.create(newRating)
}

// UPDATE/ edit
const updateRating = (ratingId, updatedRating) => {
  return ratingCollection.updateOne({_id: ratingId}, updatedRating)
}

// DELETE
const deleteRating = (ratingId) => {
  return ratingCollection.findByIdAndDelete(ratingId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addRating,
  deleteRating,
  getAllRatings,
  getOneRating,
  updateRating
}

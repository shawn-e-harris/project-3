// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const JournalSchema = new mongoose.Schema({
  journal: String,
})

// CREATE COLLECTION API
const journalCollection = mongoose.model('Journal', JournalSchema)

// FUNCTIONS

// GET/ read
const getAllJournals = () => {
  return journalCollection.find();
}

// GET/ read
const getOneJournal = (journalId) => {
  return journalCollection.findById(journalId)
}

// CREATE/ post
const addJournal = (newJournal) => {
  return journalCollection.create(newJournal)
}

// UPDATE/ edit
const updateJournal = (journalId, updatedJournal) => {
  return journalCollection.updateOne({_id: journalId}, updatedJournal)
}

// DELETE
const deleteJournal = (journalId) => {
  return journalCollection.findByIdAndDelete(journalId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addJournal,
  deleteJournal,
  getAllJournals,
  getOneJournal,
  updateJournal
}

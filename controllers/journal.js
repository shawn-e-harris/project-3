// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const JournalApi = require('../models/journal.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const JournalRouter = express.Router({
  // need to merge parameters for router to give access to parent
  mergeParams: true
})

// REQ HANDLERS ****************

// GET ALL JOURNALS
JournalRouter.get("/journals", function (req, res) {
  JournalApi.getAllJournals()
    .then((allJournals) => {
      res.json({ allJournals })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW JOURNALS
JournalRouter.post("/journals", function (req, res) {
  JournalApi.addJournal(req.body, req.params.usersId)
    .then((Journals) => {
      // res.redirect("/journals")
      res.json(Journals)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE JOURNALS PATH
JournalRouter.get("/journals/new", function (req, res) {
  JournalApi.addJournal(req.params.JournalsId)
    .then((getJournals) => {
      // res.send({ getJournals })
      res.json({ getJournals })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
JournalRouter.get("/journals/add", function (req, res) {
  // RENDER NOT CREATED YET
  // res.render("JournalsViewPath", {
  // })
  res.json("ok")
})

// GET ONE JOURNAL BY JournalId
JournalRouter.get("/journals/:journalsId", function (req, res) {
  JournalApi.getOneJournal(req.params.JournalsId)
    .then((JournalsFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("JournalsViewPath", {_id: req.params.JournalsId, JournalsFromDb})
      res.json(JournalsFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT JOURNAL
JournalRouter.put("/journals/:journalsId", function (req, res) {
  JournalApi.updateJournal(req.params.JournalsId, req.body)
    .then((Journals) => {
      // res.redirect("/journals")
      res.json(Journals)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE JOURNAL
JournalRouter.delete("/journals/:journalsId", function (req, res) {
  JournalApi.deleteJournal(req.params.JournalsId)
    .then(() => {
      // res.redirect("/journals") //redirects to "/", can use any url, etc.
      res.json(Journals)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  JournalRouter
}
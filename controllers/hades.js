// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const activityApi = require('../models/hades.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const activityRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL ACTIVITIES
activityRouter.get("/hades", function (req, res) {
  activityApi.getAllActivities()
    .then((allActivities) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allActivities })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW ACTIVITIES
activityRouter.post("/hades", function (req, res) {
  activityApi.addActivity(req.body)
    .then((activities) => {
      // res.redirect("/hades")
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE ACTIVITIES PATH
activityRouter.get("/hades/new", function (req, res) {
  activityApi.addActivity(req.params.activitiesId)
    .then((getActivities) => {
      // res.send({getActivities})
      res.json({ getActivities })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
activityRouter.get("/hades/add", function (req, res) {
  // RENDER NOT CREATED YET
  // res.render("activitiesViewPath", {
  // })
  res.json("ok")
})

// GET ONE ACTIVITY BY activityId
activityRouter.get("/hades/:activitiesId", function (req, res) {
  activityApi.getOneActivity(req.params.activitiesId)
    .then((activitiesFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {_id: req.params.activitiesId, activitiesFromDb})
      res.json(activitiesFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT ACTIVITY
activityRouter.put("/hades/:activitiesId", function (req, res) {
  activityApi.updateActivity(req.params.activitiesId, req.body)
    .then((activities) => {
      // res.redirect("/hades")
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE ACTIVITY
activityRouter.delete("/hades/:activitiesId", function (req, res) {
  activityApi.deleteActivity(req.params.activitiesId)
    .then((activities) => {
      // res.redirect("/hades") //redirects to "/", can use any url, etc.
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  activityRouter
}
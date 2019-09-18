// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const activityApi = require('../models/activity.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const activityRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL ACTIVITES
activityRouter.get("/activites", function (req, res) {
  activityApi.getAllActivities()
    .then((allActivites) => {
      // RENDER NOT CREATED YET
      res.render("activitesViewPath", {allActivites})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW ACTIVITES
activityRouter.post("/activites", function (req, res) {
  activityApi.addActivites(req.body)
  .then(() => {
    res.redirect("/activites")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})



// CREATE ACTIVITES PATH
activityRouter.get("/activites/new", function (req, res) {
  activityApi.addActivites(req.params.activitesId)
    .then((getActivites) => {
      res.send({getActivites})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
activityRouter.get("/activites/add", function (req, res) {
  // RENDER NOT CREATED YET
    res.render("activitesViewPath", {
    })
})

// GET ONE ACTIVITY BY activityId
activityRouter.get("/activites/:activitesId", function (req, res) {
  activityApi.getOneActivites(req.params.activitesId)
    .then((activitesFromDb) => {
      // RENDER NOT CREATED YET
      res.render("activitesViewPath", {_id: req.params.activitesId, activitesFromDb})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT ACTIVITY
activityRouter.put("/activites/:activitesId", function (req, res) {
  activityApi.updateActivites(req.params.activitesId, req.body)
  .then(() => {
    res.redirect("/activites")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// DELETE ACTIVITY
activityRouter.delete("/activites/:activitesId", function (req, res) {
  activityApi.deleteActivites(req.params.activitesId)
  .then(() => {
    res.redirect("/activites") //redirects to "/", can use any url, etc.
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

//  IMPORT ROUTERS
module.exports = {
  activityRouter
}
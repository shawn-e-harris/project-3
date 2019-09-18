// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const activityApi = require('../models/activity.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const activityRouter = express.Router()

// REQ HANDLER
activityRouter.get('/', (req, res) => {
  res.json(activityApi.getHelloWorldString())
})

//  IMPORT ROUTERS
module.exports = {
  activityRouter
}

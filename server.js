// IMPORT PACKAGES
const express = require('express')
const app = express()

// IMPORT ROUTERS
const { activityRouter } = require('./controllers/activity.js')
const { ratingRouter } = require('./controllers/rating.js')
const { JournalRouter } = require('./controllers/journal.js')
const { userRouter } = require('./controllers/user.js')


// PARSE REGISTERED MIDDLEWARE
app.use(express.urlencoded({extended: true}))


// PARSE HTTP REQUEST FROM JSON STRING
app.use(express.json())


// USE `./client/build` DIRECTORY TO HOST STATIC CSS AND IMAGE FILES
app.use(express.static(`${__dirname}/client/build`))


// PREFIX FOR ALL ROUTERS
app.use('/api/', JournalRouter)
app.use('/api/', ratingRouter)
app.use('/api/', userRouter)
app.use('/api/', activityRouter)


/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


// PORT NUMBER
const PORT = process.env.PORT || 3000

// LOCALHOST: PORT(above)
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})

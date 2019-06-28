/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const locationApi = require('../models/location.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const locationRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
locationRouter.get('/', (req, res) => {
  locationApi.getAllLocations()
    .then((locations) => {
        res.render('locations/locations', {locations})
    })
})

locationRouter.post('/', (req, res) => {
    locationApi.addLocation(req.body)
        .then(() => {
            res.send('new location created')
        })
})

locationRouter.get('/new', (req, res) => {
    res.render('locations/createLocationForm')
})

locationRouter.get('/:locationId', (req, res) => {
    locationApi.getLocation(req.params.locationId)
        .then((location) => {
            res.render('locations/singleLocation', {location})
        })
})

locationRouter.delete('/:locationId', (req, res) => {
    locationApi.deleteLocation(req.params.locationId)
        .then(() => {
            res.send('location deleted')
        })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  locationRouter
}

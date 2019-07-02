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
const shopApi = require('../models/shopPopUp.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const shopRouter = express.Router({ mergeParams: true })

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

 //USE IN THE LOCATION CONTROLLER
// shopRouter.get('/', (req, res) => {
//   shopApi.getAllShops() 
//     .then((shopPopUps) => {
//       res.send(shopPopUps)
//     })
// })

shopRouter.get('/', (req, res) => {
  req.body.locationId = req.params.locationId
  shopApi.getShopsByLocationId(req.params.locationId)
    .then((locationShopPopUps) => {
      res.render('shops/singleLocationShopsOnly', {locationShopPopUps})
    })
})

shopRouter.post('/', (req, res) => {
  req.body.locationId = req.params.locationId
  shopApi.addShop(req.body)
    .then(() => {
      res.redirect('/locations')
    })
})

shopRouter.get('/new', (req, res) => {
  res.render('shops/createShopForm')
})

shopRouter.get('/:shopId/edit', (req, res) => {
  shopApi.getOneShop(req.params.shopId)
    .then((shop) => {
      res.render('shops/editShopForm', {shop})
    })
})

shopRouter.get('/:shopId', (req, res) => {
  shopApi.getOneShop(req.params.shopId)
    .then((shopPopUp) => {
      res.render('shops/singleShopPopUp', {shopPopUp})
    })
})

shopRouter.put('/:shopId', (req, res) => {
  shopApi.editShop(req.params.shopId, req.body)
    .then(() => {
      res.redirect('/locations')
    })
})

shopRouter.delete('/:shopId', (req, res) => {
  shopApi.deleteShop(req.params.shopId)
    .then(() => {
      res.redirect('/locations')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shopRouter
}

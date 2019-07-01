/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const ShopSchema = new mongoose.Schema({
 shop: {
   type: String,
   required: true
 },
 aesthetic: String,
 product: {
   type: String,
   required: true
 },
 //change this to a radial?
 price: {
   type: String,
   enum: ['$', '$$', '$$$', '$$$$'],
   required: true
 },
 address: {
   type: String,
   required: true
 },
 time: {
   type: Date,
   default: Date.now
 },
 locationId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ShopCollection = mongoose.model('Shop', ShopSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllShops() {
  return ShopCollection.find()
}

function getShopsByLocationId (locationId) {
  return ShopCollection.find({locationId: locationId})
}

function addShop (shop) {
  return ShopCollection.create(shop)
}

function getOneShop (shopId) {
  return ShopCollection.findById(shopId)
}

function editShop (shopId, newShop) {
  return ShopCollection.findByIdAndUpdate(shopId, newShop)
}

function deleteShop (shopId) {
  return ShopCollection.findByIdAndDelete(shopId)
}

function deleteAllShops () {
  return ShopCollection.deleteMany()
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllShops,
  addShop,
  getOneShop,
  editShop,
  deleteShop,
  deleteAllShops,
  getShopsByLocationId
}

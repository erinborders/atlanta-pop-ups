const locationApi = require('./location.js')
const foodApi = require('./foodPopUp.js')
const shopApi = require('./shopPopUp.js')

//locations
const buckhead = {
    neighborhood: "Buckhead"
}

const midtown = {
    neighborhood: "Midtown"
}

const downtown = {
    neighborhood: "Downtown"
}

//food pop ups
const anotherBrokenEgg = {
    restaurant: "Another Broken Egg",
    cuisine: "Breakfast",
    price: "$$",
    address: "2355 Peachtree Road \n Atlanta, GA 30305",
    time: "7/3/19",
}

const papisCubanGrill = {
    restaurant: "Papi's Cuban Grill",
    cuisine: "Caribbean",
    price: "$",
    address: "216 Ponce De Leon Ave \n Atlanta, GA 30308",
    time: "7/2/19"
}

const foodShoppe = {
    restaurant: "The Food Shoppe",
    cuisine: "Creole",
    price: "$",
    address: "123 Luckie St \n Atlanta, GA 30303",
    time: "7/1/19"
}

//shop pop ups
const modernMystic = {
    shop: "Modern Mystic",
    aesthetic: "New Age Witch",
    product: "Mystical items",
    price: "$$",
    address: "Ponce City Market",
    time: "6/30/19"
}

const lululemon = {
    shop: "Lululemon Athletica",
    aesthetic: "Athletic",
    product: "Athletic wear",
    price: "$$$",
    address: "102 West Paces Ferry Rd \n Atlanta, GA 30305",
    time: "6/29/19"
}

const executiveShop = {
    shop: "The Executive Shop",
    product: "Mens hats",
    price: "$$",
    address: "56 Walton St \n Atlanta, GA 30303",
    time: "6/28/19"
}

locationApi.deleteAllLocations()
    .then(() => foodApi.deleteAllFood())
    .then(() => shopApi.deleteAllShops())
    .then(() => locationApi.addLocation(buckhead))
    .then((buckhead) => {
        anotherBrokenEgg.locationId = buckhead._id
        lululemon.locationId = buckhead._id
        let brokenEgg = foodApi.addFood(anotherBrokenEgg)
        let lulu = shopApi.addShop(lululemon)
        Promise.all([brokenEgg, lulu])
    })
    .then(() => locationApi.addLocation(midtown))
    .then((midtown) => {
        papisCubanGrill.locationId = midtown._id
        modernMystic.locationId = midtown._id
        let papis = foodApi.addFood(papisCubanGrill)
        let mystic = shopApi.addShop(modernMystic)
        Promise.all([papis, mystic])
    })
    .then(() => locationApi.addLocation(downtown))
    .then((downtown) => {
        foodShoppe.locationId = downtown._id
        executiveShop.locationId = downtown._id
        let shoppe = foodApi.addFood(foodShoppe)
        let execShop = shopApi.addShop(executiveShop)
        Promise.all([shoppe, execShop])
    })
    .then(() => {
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })
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
// const anotherBrokenEgg = {
//     restaurant: "Another Broken Egg",
//     cuisine: "Breakfast",
//     price: "$$",
//     address: "2355 Peachtree Road \n Atlanta, GA 30305",
//     time: "7/3/19"
// }

locationApi.deleteAllLocations()
    .then(() => locationApi.addLocation(buckhead))
    .then(() => locationApi.addLocation(midtown))
    .then(() => locationApi.addLocation(downtown))
    .then(() => {
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })
const dbModels = require('../models/index.js')


const findDatabase = async (req) => {
    switch(req) {
        case 'bookingDetails':
            return dbModels.bookingDetails
            break
        case 'mobileVerification':
            return dbModels.mobileVerification
            break
        case 'stationDetails':
            return dbModels.stationDetails
            break
        case 'vehicleDetails':
            return dbModels.vehicleDetails
            break
        case 'userDetails':
            return dbModels.userDetails
            break
    }
    return null
}




module.exports = {
    findDatabase
}

const dbModels = require('../models')
const _ = require('lodash')


//create main Model
const vehicleDetails = dbModels.vehicleDetails
const stationDetails = dbModels.stationDetails


//create new vehicle
const createNewEntryIntoDBService = async(reqBody, selectedDb) => {
    const response = await dbModels.selectedDb.create(req);
    return response?.dataValues;
}

//create new station
const createNewStationService = async(req) => {
    const response = await stationDetails.create(req);
    return response?.dataValues;
}
 

//find one vehicle details
const findOneVehicleDetailsService = async (req) => {
    let response = await vehicleDetails.findOne({
        where: req
    })
    return response?.dataValues;
}

// //find one vehicle details
// const findOneVehicleDetailsService = async (req) => {
//     let response = await vehicleDetails.findOne({
//         where: req
//     })
//     return response?.dataValues;
// }



//update verificationDetails
const updateVerificationDetailsService = async (req, whereObj) => {
    let verificationDetail = await mobileVerification.update(req, {
        where: whereObj
    })
    return !!verificationDetail && !!_.find(verificationDetail, x => x != 0);
}



//create new User
const createNewUserService = async(req) => {
    const response = await userDetails.create(req);
    return response?.dataValues;
}


//find one user details
const findUserDetailsService = async (req) => {
    
    let userDetailsResponse = await userDetails.findOne({
        where: req
    })
    return userDetailsResponse?.dataValues;
}






// //delete booking by Id
// const deleteBookingService = async (req, res) => {
//     let bookingId = req.params.id
//     let deletedBooking = await bookingDetails.destroy({
//         where: {
//             bookingId: bookingId
//         }
//     })
//     res.status(200).send('booking deleted!');
// }


module.exports = {
    createNewEntryIntoDBService,
    createNewStationService,

    updateVerificationDetailsService,
    createNewUserService,
    findUserDetailsService
    // deleteBookingService
}

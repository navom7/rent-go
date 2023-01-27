const db = require('../models')
const _ = require('lodash')


//create main Model
const mobileVerification = db.mobileVerification
const userDetails = db.userDetails


//create createOtp
const createNewOtpService = async(req) => {
    const newOtpDetail = await mobileVerification.create(req);
    return newOtpDetail?.dataValues;
}
 

//find one otpDetails
const findOneOtpDetailsService = async (req) => {
    let otpDetail = await mobileVerification.findOne({
        where: req
    })
    return otpDetail?.dataValues;
}



//update verificationDetails
const updateVerificationDetailsService = async (req, whereObj) => {
    let verificationDetail = await mobileVerification.update(req, {
        where: whereObj
    })
    return !verificationDetail && _.find(verificationDetail, x => x != 0);
}



//create new User
const createNewUserService = async(req) => {
    const response = await userDetails.create(req);
    return response?.dataValues;
}


//find one user details
const findUserDetailsService = async (req) => {
    let otpDetail = await userDetails.findOne({
        where: req
    })
    return otpDetail?.dataValues;
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
    createNewOtpService,
    findOneOtpDetailsService,
    updateVerificationDetailsService,
    createNewUserService,
    findUserDetailsService
    // deleteBookingService
}

const db = require('../models')



//create main Model
const mobileVerification = db.mobileVerification



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
    let verificationDetail = await bookingDetails.update(req, {
        where: whereObj
    })
    return verificationDetail?.dataValues;
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
    updateVerificationDetailsService
    
    // deleteBookingService
}

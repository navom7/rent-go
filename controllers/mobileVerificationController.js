const db = require('../models')
const moment = require('moment')
const {
    createNewOtpService,
    findOneOtpDetailsService,
    updateVerificationDetailsService
 } = require('../service/verificationService.js')

//create main Model
const bookingDetails = db.bookingDetails



//create booking
const createNewOtp = async(req, res) => {

    let newOtpRequest = {
        // verificationId: req.body.verificationId,
        mobileNumber: req.body.mobileNumber,
        otp: Math.floor(1000 + Math.random() * 9000),
        isVerified: false,
        createdOn: moment().format()
    }

    const newOtpResponse = await createNewOtpService(newOtpRequest);
    if(!newOtpResponse || !newOtpResponse.verificationId)
    {  
        res.status(200).send({isSuccess: true, message: "Otp Sent!"})
    } else {
        res.status(500).send({isSuccess: true, message: "There is some issue with the server at this point of time, please try again!"})
    }

}


//find one booking
const verifyOtp = async (req, res) => {
    let verifyOtpRequest = {
        mobileNumber: req.body.mobileNumber,
        isVerified: false,
        otp: req.body.otp
    }
    let verifyOtpResponse = await findOneOtpDetailsService(verifyOtpRequest)
    if(!verifyOtpResponse || !verifyOtpResponse.verificationId)
    {  
        res.status(500).send({isSuccess: true, message: "There is some issue with the server at this point of time, please try again!"})
    } else {
        let updateRequestBody = {
            isVerified: true,
        }
        let whereObje = {
            verificationId: 56789//verifyOtpResponse.verificationId
        }
        let updateBooking = await updateVerificationDetailsService(updateRequestBody, whereObje)
        res.status(200).send({isSuccess: true, message: "Logged In successfully"})
    }
}



//update one booking by id
const updateVerificationDetails = async (req, res) => {
    let updateRequestBody = {

    }
    let whereObje = {

    }
    let updateBooking = await updateVerificationDetailsService(updateRequestBody, whereObje)
    res.status(200).send(updateBooking);
}


//delete booking by Id

const deleteBooking = async (req, res) => {
    try {
        let deleteRequestBody = 
        {
            bookingId: req.params.bookingId
        }
        let deletedBooking = await deleteBookingService(deleteRequestBody);
        res.status(200).send('booking deleted!');
    } catch(err) {
        console.log('Error while deleting Booking details: ', err);
        res.status(500).send('Error while deleting Booking details!');
    }
}


module.exports = {
    createNewOtp,
    verifyOtp,
    // updateBooking,
    // deleteBooking,
    // findOneBooking
}

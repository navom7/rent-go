const db = require('../models')
const moment = require('moment')
const {
    createNewOtpService,
    findOneOtpDetailsService,
    updateVerificationDetailsService,
    createNewUserService,
    findUserDetailsService
 } = require('../service/loginService.js')

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
        res.status(500).send({isSuccess: true, message: "There is some issue with the server at this point of time, please try again!"})
    } else {
        res.status(200).send({isSuccess: true, message: "Otp Sent!"})
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
        res.status(500).send({isSuccess: false, message: "Incorrect OTP!"})
    } else {
        let updateRequestBody = {
            isVerified: true,
        }
        let whereObje = {
            verificationId: 234567//verifyOtpResponse.verificationId
        }
        let updateBooking = await updateVerificationDetailsService(updateRequestBody, whereObje)
        if(!updateBooking){
            res.status(500).send({isSuccess: false, message:"There is some issue, please try after sometime!"})
        }
        else {
            res.status(200).send({isSuccess: true, message: "Logged In successfully"})
        }
    }
}



//update one verification Details
const updateVerificationDetails = async (req, res) => {
    let updateRequestBody = {

    }
    let whereObje = {

    }
    let updateBooking = await updateVerificationDetailsService(updateRequestBody, whereObje)
    res.status(200).send(updateBooking);
}


//create newUser
const createUser = async(req, res) => {

    let reqBody = {
        // verificationId: req.body.verificationId,
        mobileNumber: req.body.mobileNumber,
        fullName: req.body.fullName,
        gender: req.body.gender,
        dob: req.body.dob,
        emailId: req.body.emailId,
        roleId: req.body.userRole == 'admin' ? 1 : 2,
    }

    const createNewUserResponse = await createNewUserService(reqBody);
    if(!createNewUserResponse || !createNewUserResponse.userId)
    {  
        res.status(200).send({isSuccess: false, message: "Internal Server Error!"})
    } else {
        res.status(500).send({isSuccess: true, userDetails: createNewUserResponse})
    }

}

//update one userDetails by id
const findUserDetails = async (req, res) => {
    let findUserDetailsRequest = {
        mobileNumber: req.body.mobileNumber
    }
    let userDetailsResponse = await findUserDetailsService(findUserDetailsRequest)
    if(!userDetailsResponse || !userDetailsResponse.userId)
    {  
        res.status(200).send({isSuccess: false, message: "Internal Server Error!"})
    } else {
        res.status(500).send({isSuccess: true, userDetails: userDetailsResponse})
    }
}





module.exports = {
    createNewOtp,
    verifyOtp,
    createUser,
    // deleteBooking,
    // findOneBooking
}

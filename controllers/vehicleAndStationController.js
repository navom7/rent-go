const db = require('../models')
const moment = require('moment')

const loginService = require('../service/loginService.js')


//create booking
const createNewOtp = async(req, res) => {

    let newOtpRequest = {
        // verificationId: req.body.verificationId,
        mobileNumber: req.body.mobileNumber,
        otp: Math.floor(1000 + Math.random() * 9000),
        isVerified: false,
        createdOn: moment().format()
    }

    const newOtpResponse = await loginService.createNewOtpService(newOtpRequest, 'mobileVerification');
    if(!newOtpResponse || !newOtpResponse.verificationId)
    {  
        res.status(500).send({isSuccess: true, message: "There is some issue with the server at this point of time, please try again!"})
    } else {
        res.status(200).send({isSuccess: true, message: "Otp Sent!"})
    }

}


//find one booking
const login = async (req, res) => {
    let verifyOtpRequest = {
        mobileNumber: req.body.mobileNumber,
        // isVerified: false,
        otp: req.body.otp
    }
    let verifyOtpResponse = await loginService.findOneOtpDetailsService(verifyOtpRequest)
    if(!verifyOtpResponse || !verifyOtpResponse.verificationId)
    {  
        res.status(500).send({isSuccess: false, message: "Incorrect OTP!"})
    } else if(verifyOtpResponse.isVerified) {
        
    } else {
        let updateRequestBody = {
            isVerified: true,
        }
        let whereObje = {
            verificationId: verifyOtpResponse.verificationId
        }
        let deactivateOtp = await loginService.updateVerificationDetailsService(updateRequestBody, whereObje)
        if(!deactivateOtp){
            res.status(500).send({isSuccess: false, message:"There is some issue, please try after sometime!"})
        }
        else {
            let findUserDetailsRequest = {
                mobileNumber: req.body.mobileNumber
            }
            let userDetailsResponse = await loginService.findUserDetailsService(findUserDetailsRequest)
            if(!userDetailsResponse || !userDetailsResponse.userId){
                res.status(200).send({isSuccess: true, userPresent: false, message: "Mobile number verified, please create the user account."})
            } else {
                res.status(200).send({
                    isSuccess: true, 
                    userPresent: true,
                    message: "Logged In successfully",
                    userDetails: userDetailsResponse
                })
            }
        }
    }
}



//update one verification Details
const updateVerificationDetails = async (req, res) => {
    let updateRequestBody = {

    }
    let whereObje = {

    }
    let updateBooking = await loginService.updateVerificationDetailsService(updateRequestBody, whereObje)
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
    let verifyOtpRequest = {
        mobileNumber: req.body.mobileNumber
    }
    let verifyOtpResponse = await loginService.findOneOtpDetailsService(verifyOtpRequest)
    if(!verifyOtpResponse || !verifyOtpResponse.isVerified) {
        res.status(200).send({isSuccess: false, message: "Mobile number not verified, Please verify first!"})
    }
    let findUserDetailsRequest = {
        mobileNumber: req.body.mobileNumber
    }
    let userDetailsResponse = await loginService.findUserDetailsService(findUserDetailsRequest)
    if(userDetailsResponse || userDetailsResponse.userId)
    {  
        res.status(200).send({
            isSuccess: false, 
            message: "User with respective mobile number already present",
            userDetails: userDetailsResponse
        })
    }
    const createNewUserResponse = await loginService.createNewUserService(reqBody);
    
    if(!createNewUserResponse || !createNewUserResponse.userId)
    {  
        res.status(200).send({isSuccess: false, message: "Internal Server Error!"})
    } else {
        res.status(200).send({isSuccess: true, userDetails: createNewUserResponse})
    }

}

//update one userDetails by id
const findUserDetails = async (req, res) => {
    let findUserDetailsRequest = {
        mobileNumber: req.body.mobileNumber
    }
    let userDetailsResponse = await loginService.findUserDetailsService(findUserDetailsRequest)
    if(!userDetailsResponse || !userDetailsResponse.userId)
    {  
        res.status(200).send({isSuccess: false, message: "Internal Server Error!"})
    } else {
        res.status(200).send({isSuccess: true, userDetails: userDetailsResponse})
    }
}





module.exports = {
    createNewOtp,
    login,
    createUser,
    findUserDetails
    // deleteBooking,
    // findOneBooking
}

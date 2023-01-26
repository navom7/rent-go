const db = require('../models')
const moment = require('moment')
const {
    createNewOtpService
 } = require('../service/verificationService.js')

//create main Model
const bookingDetails = db.bookingDetails



//create booking
const createNewOtp = async(req, res) => {
    res.status(200).send(req.body);

    // let newOtpRequest = {
    //     // verificationId: req.body.verificationId,
    //     mobileNumber: req.body.mobileNumber,
    //     otp: Math.floor(1000 + Math.random() * 9000),
    //     isVerified: false,
    //     createdOn: moment().format()
    // }

    // const bookingDetail = await createNewOtpService(newOtpRequest);
    // res.status(200).send(req.body)

}


//get all bookings
const getAllBookings = async (req, res) => {

    let bookings = await getAllBookingsService()
    res.status(200).send(bookings);
}


//find one booking
const findOneBooking = async (req, res) => {
    let bookingId = req.params.id
    let bookings = await bookingDetails.One({
        where: {
            bookingId: bookingId
        }
    })
    res.status(200).send(bookings);
}



//update one booking by id
const updateBooking = async (req, res) => {
    let bookingId = req.params.id
    let updateBooking = await bookingDetails.update(req.body, {
        where: {
            bookingId: bookingId
        }
    })
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
    // getAllBookings,
    // updateBooking,
    // deleteBooking,
    // findOneBooking
}

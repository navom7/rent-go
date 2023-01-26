const db = require('../models')

const {
    createNewBookingService, 
    getAllBookingsService, 
    deleteBookingService, 
    findOneBookingService,
    updateBookingService
 } = require('../service/bookingService.js')

//create main Model
const bookingDetails = db.bookingDetails



//create booking
const createNewBooking = async(req, res) => {

    let newBookingRequest = {
        bookingId: req.body.bookingId,
        userId: req.body.userId,
        vehicleNumber: req.body.vehicleNumber,
        vehicleType: req.body.vehicleType,
        isRented: req.body.isRented,
        lastStationId: req.body.lastStationId,
        nextStationId: req.body.nextStationId,
        tripStartingTime: req.body.tripStartingTime,
        tripEndingTIme: req.body.tripEndingTIme
    }

    const bookingDetail = await createNewBookingService(newBookingRequest);
    res.status(200).send(bookingDetail)

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
    createNewBooking,
    getAllBookings,
    updateBooking,
    deleteBooking,
    findOneBooking
}

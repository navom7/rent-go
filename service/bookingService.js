const db = require('../models')



//create main Model
const bookingDetails = db.bookingDetails



//create booking
const createNewBookingService = async(req) => {

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

    const bookingDetail = await bookingDetails.create(newBookingRequest);
    return bookingDetail;
}


//get all bookings
const getAllBookingsService = async () => {

    let bookings = await bookingDetails.findAll({
        attributes: [
            'bookingId',
            'userId',
            'vehicleNumber',
            'vehicleType'
        ]
    })
    
    return bookings;
}


//find one booking
const findOneBookingService = async (req, res) => {
    let bookingId = req.params.id
    let bookings = await bookingDetails.One({
        where: {
            bookingId: bookingId
        }
    })
    res.status(200).send(bookings);
}



//update one booking by id
const updateBookingService = async (req, res) => {
    let bookingId = req.params.id
    let updateBooking = await bookingDetails.update(req.body, {
        where: {
            bookingId: bookingId
        }
    })
    res.status(200).send(updateBooking);
}


//delete booking by Id

const deleteBookingService = async (req, res) => {
    let bookingId = req.params.id
    let deletedBooking = await bookingDetails.destroy({
        where: {
            bookingId: bookingId
        }
    })
    res.status(200).send('booking deleted!');
}


module.exports = {
    createNewBookingService,
    getAllBookingsService,
    updateBookingService,
    deleteBookingService,
    findOneBookingService
}

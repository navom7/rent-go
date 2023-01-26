const db = require('../models')



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

    const bookingDetail = await bookingDetails.create(newBookingRequest);
    res.status(200).send(bookingDetail)

}


//get all bookings
const getAllBookings = async (req, res) => {

    let bookings = await bookingDetails.findAll({
        attributes: [
            'bookingId',
            'userId',
            'vehicleNumber',
            'vehicleType'
        ]
    })
    res.status(200).send(bookings);
}

const findOneBooking = async (req, res) => {
    let bookingId = req.params.id
    let bookings = await bookingDetails.findAll({
        attributes: [
            'bookingId',
            'userId',
            'vehicleNumber',
            'vehicleType'
        ]
    })
    res.status(200).send(bookings);
}




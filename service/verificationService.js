const db = require('../models')



//create main Model
const bookingDetails = db.bookingDetails



//create booking
const createNewOtpService = async(req) => {
    const newOtpDetail = await bookingDetails.create(req);
    return newOtpDetail;
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
    createNewOtpService,
    getAllBookingsService,
    updateBookingService,
    deleteBookingService,
    findOneBookingService
}

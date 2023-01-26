const bookingController = require('../controllers/bookingController.js')
const mobileVerificationController = require('../controllers/mobileVerificationController.js')

const router = require('express').Router();

router.post('/newBooking', bookingController.createNewBooking);
router.get('/getAllBookings', bookingController.getAllBookings);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);



router.post('/sendOtp', mobileVerificationController.createNewOtp)





module.exports = router



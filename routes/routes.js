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
router.post('/login', mobileVerificationController.verifyOtp)




module.exports = router



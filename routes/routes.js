const bookingController = require('../controllers/bookingController.js')
const mobileVerificationController = require('../controllers/loginController.js')

const router = require('express').Router();

router.post('/newBooking', bookingController.createNewBooking);
router.get('/getAllBookings', bookingController.getAllBookings);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);
// router.post('/newBooking', bookingController.createNewBooking);



router.post('/sendOtp', mobileVerificationController.createNewOtp)
router.post('/login', mobileVerificationController.verifyOtp)
router.post('/signup', mobileVerificationController.createUser)



module.exports = router



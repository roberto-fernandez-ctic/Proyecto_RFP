const CONFIG = require("../config/config");
const express = require("express");
const UserController = require("../controllers/user_controller");
const BookingController = require("../controllers/booking_controller");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });
  
router.get("/users", UserController.getAllUsers);

router.get('/bookings', BookingController.getAllBookings);
/* router.get('/bookingsByCourtAndDate', BookingController.getBookingsByCourtAndDate); */

module.exports = router;

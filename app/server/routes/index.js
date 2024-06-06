const CONFIG = require("../config/config");
const express = require("express");
const UserController = require("../controllers/user_controller");
const BookingController = require("../controllers/booking_controller");
const AuthController = require("../controllers/auth_controller")
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });
  
router.get("/users", UserController.getAllUsers);

router.get("users/:id", UserController.getUserById);

router.post("/login", AuthController.login);

router.get('/bookings', BookingController.getAllBookings);

router.get("/bookings/:id_user", BookingController.getBookingsById)

router.post("/booking/:date/:id_court/:id_user", BookingController.setBooking);

module.exports = router;

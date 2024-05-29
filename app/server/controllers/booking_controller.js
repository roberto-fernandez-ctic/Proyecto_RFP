const { Booking } = require("../models");
const CONFIG = require("../config/config");

const BookingController = {
getAllBookings: (req, res) => {
    Booking.findAll({})
      .then((bookings) => {
        res.status(200).json(bookings);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
};

module.exports = BookingController;
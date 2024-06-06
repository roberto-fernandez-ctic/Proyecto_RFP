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

  getBookingsById: (req, res) => {
    const userId = req.params.id_user;

    Booking.findAll({ where: { id_user: userId } })
      .then((bookings) => {
        if (bookings.length > 0) {
          res.status(200).json(bookings);
        } else {
          res.status(404).json({ message: 'No bookings found for this user' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },

  setBooking: (req, res) => {
    const { date, id_court, id_user } = req.params;

    Booking.create({ date, id_court, id_user })
      .then((booking) => {
        res.status(201).json(booking);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
};

module.exports = BookingController;

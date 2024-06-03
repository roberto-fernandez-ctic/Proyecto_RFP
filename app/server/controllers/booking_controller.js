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

getBookingsByCourtAndDate: (req, res) => {
  const { courtId, date } = req.query;
  const startDate = new Date(date);
  const endDate = new Date(date);
  endDate.setDate(startDate.getDate() + 1);
  
  Booking.findAll({
    where: {
      id_court: courtId,
      date: {
        [Op.between]: [startDate, endDate],
      },
    },
  })
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

module.exports = BookingController;
const { Court } = require("../models");
const CONFIG = require("../config/config");

const UserController = {
getAllCourts: (req, res) => {
    Court.findAll({})
      .then((users) => {
        res.status(200).json(courts);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
};

module.exports = UserController;
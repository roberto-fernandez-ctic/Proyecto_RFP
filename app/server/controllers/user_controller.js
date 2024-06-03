const { User } = require("../models");
const CONFIG = require("../config/config");

const UserController = {
getAllUsers: (req, res) => {
    User.findAll({})
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
};

module.exports = UserController;
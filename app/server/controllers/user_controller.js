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

  getUserById: (req,res) => {
    const id = req.params.id;
    User.findOne({ where: id })
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
};

module.exports = UserController;
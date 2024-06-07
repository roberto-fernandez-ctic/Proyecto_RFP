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
  },

  checkUsername: (req, res) => {
    const { username } = req.body;
    User.findOne({ where: { username } })
      .then((user) => {
        if (user) {
          res.status(200).json({ available: false });
        } else {
          res.status(200).json({ available: true });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
  checkEmail: (req, res) => {
    const { email } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        if (user) {
          res.status(200).json({ available: false });
        } else {
          res.status(200).json({ available: true });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },

  registerUser: async (req, res) => {
    const { name, email, password, username } = req.body;
    try {
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
      }

      const newUser = await User.create({
        name,
        email,
        password,  // Contraseña sin hash
        username,
        rol: 'user', // Establecer el rol como 'user'
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UserController;

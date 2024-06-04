// auth_controller.js
const { User } = require('../models');

const AuthController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (user) {
        if (password === user.password) {
          // Genera un token o maneja la autenticación como prefieras
          res.status(200).json({ message: 'Login successful', user });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }
};

module.exports = AuthController;
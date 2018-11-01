const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('', (req, res) => {
  if (!req.body.name) {
    res.status(422).json({
      error: 'Name not provided!',
    });
  }
  if (!req.body.email) {
    res.status(422).json({
      error: 'Email not provided!',
    });
  }
  if (!req.body.password) {
    res.status(422).json({
      error: 'Password not provided!',
    });
  }

  const user = {
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  fs.writeFileSync('./user.json', JSON.stringify(user, 2), 'utf-8');
  res.status(200).json(user);
});

module.exports = router;

const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('', (req, res) => {
  const user = {
    userName: req.body.name,
    password: req.body.password,
  };

  const dbUser = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));

  if (user.name === dbUser.name && user.password === dbUser.password) {
    dbUser.loggedIn = true;
    console.log(dbUser);
    fs.writeFileSync('./user.json', JSON.stringify(dbUser, 2), 'utf-8');
    res.sendStatus(200);
  } else {
    res.status(401).json({
      error: 'Unauthorized',
    });
  }
});

module.exports = router;

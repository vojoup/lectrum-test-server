const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('', (req, res) => {
  const user = {
    userName: req.body.name,
  };

  const dbUser = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));

  if (user.name === dbUser.name) {
    dbUser.loggedIn = false;
    console.log(dbUser);
    fs.writeFileSync('./user.json', JSON.stringify(dbUser, 2), 'utf-8');
    res.sendStatus(200);
  }
});

module.exports = router;

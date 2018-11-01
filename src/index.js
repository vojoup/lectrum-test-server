const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const registration = require('./routes/registration');
const auth = require('./routes/auth');
const logout = require('./routes/logout');

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/reg', registration);
app.use('/auth', auth);
app.use('/logout', logout);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routesHandler = require('./routes/handler.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
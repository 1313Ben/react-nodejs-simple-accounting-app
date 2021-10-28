const express = require('express');
const app = new express();
const config = require('./dba/config');
const entryRoutes = require('./routes/entry-router.js');

app.use(express.json());

const cors_app = require('cors');
app.use(cors_app());

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level= "debug";

app.use('/', entryRoutes.router);


let server = app.listen(config.port, () => {
  console.log('Server is listening  on port '+config.port)
});
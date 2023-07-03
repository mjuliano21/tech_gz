const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(5000, () => console.log('|Server Started at http://localhost:5000'));

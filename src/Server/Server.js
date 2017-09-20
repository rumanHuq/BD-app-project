/* global NODE_ENV */

import express from 'express';
import { resolve } from 'path';
import { black } from 'chalk'; // eslint-disable-line

// import middlewares
import bodyParser from 'body-parser';
import { developmentErrors, productionErrors, pageNotFound } from './utils/helpers';

// import Routes
import Routes from './Routes';

// DB coneection
import './DB';

const app = express();
const Router = express.Router();

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, 'templates'));

// global middleware usage:BEFORE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, '..', 'Client')));
app.use('/api', Router);

app.get('/', (req, res) => res.render('index'));
Routes(Router);
// global middleware usage:AFTER
const ENV = NODE_ENV;
app.use(pageNotFound);
if (ENV === 'dev') app.use(developmentErrors);
if (ENV === 'prod') app.use(productionErrors);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(black.bgYellow('🌏 🌏 🌏  Server running on Port: ', PORT, '🌏 🌏 🌏 ')),
); // eslint-disable-line

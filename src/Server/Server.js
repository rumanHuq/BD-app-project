/* global NODE_ENV */

import express from 'express';
import { resolve } from 'path';
import { black } from 'chalk'; // eslint-disable-line

// import middlewares
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import { developmentErrors, productionErrors, pageNotFound } from './utils/errorHandler';
import helpers from './utils/helpers';
import Routes from './Routes';
// DB coneection
import './DB';

const app = express();

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, 'templates'));

// global middleware usage:BEFORE

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, '..', 'Client')));
app.use(flash());
app.use(helpers); // called before invoking express.Router(); otherwise doesnt work

const Router = express.Router();
app.use('/api', Router);
Routes(Router);

app.get('/', (req, res) => res.render('index'));
app.get('/api/error', (req, res) => res.render('404'));

// global middleware usage:AFTER
const ENV = NODE_ENV;
app.use(pageNotFound);
app.use(ENV === 'dev' ? developmentErrors : productionErrors);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(black.bgYellow('🌏 🌏 🌏  Server running on Port: ', PORT, '🌏 🌏 🌏 ')),
); // eslint-disable-line

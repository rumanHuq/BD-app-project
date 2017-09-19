/* global NODE_ENV */

import express from 'express';
import { resolve } from 'path';

// import middlewares
import bodyParser from 'body-parser';
import { developmentErrors, productionErrors, pageNotFound } from './utils/helpers';

const app = express();

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, 'templates'));

// global middleware usage:BEFORE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, '..', 'Client')));

app.get('/', (req, res) => res.render('bla'));

// global middleware usage:AFTER
const ENV = NODE_ENV;
app.use(pageNotFound);
if (ENV === 'dev') app.use(developmentErrors);
if (ENV === 'prod') app.use(productionErrors);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on Port: ', PORT)); // eslint-disable-line

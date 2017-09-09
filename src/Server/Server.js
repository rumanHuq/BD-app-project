import express from 'express';
import { resolve } from 'path';

const PORT = process.env.PORT || 3000;
const app = express();
// VIEW
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, 'templates'));
app.use(express.static(resolve(__dirname, '..', 'Client')));
app.get('/', (req, res) => res.render('index'));
app.listen(PORT, () => console.log('Running on Port: ', PORT)); // eslint-disable-line

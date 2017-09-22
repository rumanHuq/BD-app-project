import isEmail from 'validator/lib/isEmail';
import Driver from '../Models/';

const getAllDrivers = async (req, res) => {
  const drivers = await Driver.find();
  res.render('404', { drivers });
};

const createNewDrive = async (req, res) => {
  if (!isEmail(req.body.email)) {
    req.flash('error', 'not valid email');
  } else {
    const driver = new Driver(req.body);
    await driver.save();
  }
  return res.redirect('/api');
};

export default { getAllDrivers, createNewDrive };

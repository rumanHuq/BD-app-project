import Driver from '../Models/';

const getAllDrivers = async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
};

const createNewDrive = async (req, res) => {
  const driver = new Driver(req.body);
  await driver.save();
  res.redirect('/api');
};

export default { getAllDrivers, createNewDrive };

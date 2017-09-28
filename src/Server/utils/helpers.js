export default (req, res, next) => {
  res.locals.dump = data => JSON.stringify(data, null, 2);
  res.locals.flashes = req.flash();
  next();
};

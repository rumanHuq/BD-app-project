export const asyncErrorHandler = fn => (req, res, next) => fn(req, res).catch(next);

export const pageNotFound = (req, res, next) => {
  const ENV = NODE_ENV; // eslint-disable-line
  const err = new Error('Route not Found');
  err.status = 404;

  next(err);
};

export const developmentErrors = (err, req, res) => {
  const status = err.status || 500;
  res.render('404', { message: err.message, status, stack: err.stack });
};

export const productionErrors = (err, req, res) => {
  const status = err.status || 500;
  res.render('404', { message: err.message, status, stack: 'Production Mode' });
};

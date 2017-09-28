export const asyncErrorHandler = fn => (req, res, next) => fn(req, res).catch(next);

export const pageNotFound = (req, res, next) => {
  const ENV = NODE_ENV; // eslint-disable-line
  const err = new Error('Route not Found');
  err.status = 404;

  next(err);
};

export const developmentErrors = (err, req, res, next) => {
  const status = err.status || 500;
  res.render('error', { message: err.message, status, stack: err.stack });
  next();
};

export const productionErrors = (err, req, res, next) => {
  const status = err.status || 500;
  res.render('error', { message: err.message, status, stack: 'Production Mode' });
  next();
};

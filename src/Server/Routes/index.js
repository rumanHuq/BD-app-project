import DriverController from '../Controllers';
import { asyncErrorHandler } from '../utils/errorHandler';

export default (Router) => {
  Router.route('/')
    .get(asyncErrorHandler(DriverController.getAllDrivers))
    .post(asyncErrorHandler(DriverController.createNewDrive));
};

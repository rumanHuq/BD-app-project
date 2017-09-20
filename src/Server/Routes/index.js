import DriverController from '../Controllers';
import { asyncErrorHandler } from '../utils/helpers';

export default (Router) => {
  Router.route('/')
    .get(asyncErrorHandler(DriverController.getAllDrivers))
    .post(asyncErrorHandler(DriverController.createNewDrive));
};

import mongoose from 'mongoose';
import { black } from 'chalk'; // eslint-disable-line

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

mongoose.Promise = global.Promise;

export default (async () => {
  try {
    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
      useMongoClient: true,
    });
    console.log(black.bgGreen('🔌 🔌 🔌  connected to DB  🔌 🔌 🔌  '));
  } catch (err) {
    console.log('😨 😨 😨 Something Went wrong ', JSON.stringify(err, null, 2));
  }
})();

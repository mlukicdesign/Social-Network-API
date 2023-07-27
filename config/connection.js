// Importing the necessary modules from Mongoose for connecting to MongoDB
const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetwork';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = connection;
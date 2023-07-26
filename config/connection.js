// Importing the necessary modules from Mongoose for connecting to MongoDB
const { connect, connection } = require('mongoose');

// Defining the connection string for MongoDB.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetwork'; // adjust to relevant db name

// Connecting to the MongoDB database using the connection string and specified options.
// The options include useNewUrlParser and useUnifiedTopology to use the new URL parser
// and the new Server Discovery and Monitoring engine, respectively.
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Exporting the database connection object to be used in other parts of the application.
module.exports = connection;
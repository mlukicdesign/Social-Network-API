// import packaged & files
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Environment Variables
const PORT = 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// Connect to MongoDB database
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
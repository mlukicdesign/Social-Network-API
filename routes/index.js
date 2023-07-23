// Iniitalize Router
const router = require('express').Router();

// import individual api routes
const apiRoutes = require('./api');

// Mounting API Routes
router.use('/api', apiRoutes);

// Fallback Route
router.use((req, res) => res.send('Wrong route!'));

// Export routes the main entry point
module.exports = router;
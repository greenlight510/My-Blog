const router = require('express').Router();
const apiRoutes = require('./api');
const home_routes = require('./home-routes');

//Api Routes
router.use('/api', apiRoutes);
router.use('/',home_routes);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
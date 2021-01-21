var express = require('express');
var router = express.Router();
var ApiController = require('../controllers/apiController');

/* GET api index. */
router.get('/', ApiController.tracksSearch);

module.exports = router;

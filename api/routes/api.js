var express = require('express');
var router = express.Router();
var TrackController = require('../controllers/trackController');

/* GET api index. */
router.get('/search',
    TrackController.validate('findTracks'),
    TrackController.trackSearch);

module.exports = router;

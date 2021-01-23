const TrackService = require('../services/tracks/trackService');
const { query, validationResult } = require('express-validator');

exports.trackSearch = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { q, offset, limit } = req.query;
    const tracks = await TrackService.findByName(q, limit, offset);
    return res.status(200).json({ status: 200, data: tracks, message: "Success" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.validate = (method) => {
  switch (method) {
    case 'findTracks': {
      return [
        query('q', 'Parametro de búsqueda obligatorio').exists(),
        query('offset', 'Offset es obligatorio').exists(),
        query('limit', 'Limit es obligatorio').exists(),
      ];
    }
  }
}
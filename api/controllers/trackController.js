
const TrackService = require('../services/tracks/trackService');

exports.tracksSearch = async (req, res) => {
  let trackName = req.query.q;
  let offset = req.query.offset;
  let limit = req.query.limit;
  try {
    const tracks = await TrackService.findByName(trackName,limit,offset);
    return res.status(200).json({ status: 200, data: tracks, message: "Success" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
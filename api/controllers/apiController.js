
const SpotifyService = require('../services/spotifyService');

exports.tracksSearch = async (req, res) => {
  try {
    const tracks = await SpotifyService.findTracks('', '');
    return res.status(200).json({ status: 200, data: tracks, message: "Success" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
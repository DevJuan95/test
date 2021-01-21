const SpotifyAdapter = require('../../adapters/spotifyAdapter');

exports.findByName = async (name) => {
    let limit =  50;
    let offset = 0;
    try {
        const tracks = await SpotifyAdapter.getTracksByName(name);
        return tracks;
    } catch (e) {
        console.log(e);
        throw Error(e.message);
    };
}



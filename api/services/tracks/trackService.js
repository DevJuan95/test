const SpotifyAdapter = require('../../adapters/spotifyAdapter');

exports.findByName = async (name, limit, offset) => {
    try {
        const tracks = await SpotifyAdapter.getTracks(name,limit,offset);
        return tracks;
    } catch (e) {
        console.log(e);
        throw Error(e.message);
    };
}



const fetch = require('node-fetch');

const client_id = 'd2434174b0b64805ac38e676c29afc0c';
const client_secret = 'e18ecaf890324e4eaa68cab06f19c37f';
const authConfig = {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    },
}

exports.getTracksByName = async (query) => {
    try {
        const tracks = await fetchTracksByName(query);
        return tracks;
    } catch (e) {
        console.log(e);
        throw Error(e.message);
    };
}

const fetchTracksByName = async (name) => {
    try {
        const token = await fetchToken();
        const data = await fetchData(token, name);
        if (!data.tracks) {
            throw Error("No tracks found");
        }
        const mappedData = await mapData(data);
        return mappedData;
    } catch (e) {
        throw Error(`Error on fetching tracks ${e.status}`);
    }

}

const mapData = async (data) => {
    let mappedData = {
        tracks: [],
    };
    data.tracks.items.map(track => {
        mappedData.tracks.push(track);
    });
    mappedData['limit'] = data.tracks.limit;
    mappedData['offset'] = data.tracks.offset;
    return mappedData;
}

const searchCallConfig = (token) => {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }
}

const fetchToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', authConfig);
    if (!response.ok) {
        const message = `Spotify error: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    if (!body.access_token) throw new Error('Error on token');
    return body.access_token;
}

const fetchData = async (token, query) => {
    const encodedParams = `q=${encodeURIComponent(query)}&type=track&limit=20`;
    const response = await fetch('https://api.spotify.com/v1/search?' + encodedParams, searchCallConfig(token));
    if (!response.ok) {
        const message = `Error at search call: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    return body;
}


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

exports.findTracks = async (query, limit) => {
    try {
        const token = await fetchToken();
        const tasks = await fetchTracks(token);
        return tasks;
    } catch (e) {
        console.log(e);
        throw Error(e.message);
    };
}

const fetchToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', authConfig);
    if (!response.ok) {
        const message = `Spotify error: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    if (!body.access_token) throw new Error('No se encontró token');
    return body.access_token;
}

const fetchTracks = async (token) => {
    const response = await fetch('https://api.spotify.com/v1/search?q=Muse&type=track', searchConfig(token));
    if (!response.ok) {
        const message = `Error at search call: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    return body;
}

const searchConfig = (token) => {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }
}
const fetch = require('node-fetch');
const { CLIENT_ID, CLIENT_SECRET, SPOTIFY_TOKEN_URL, SPOTIFY_SEARCH_URL } = require('../config');

const AUTHCONFIG = {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    },
}
/**
 * creates the configuration parameters.
 * @param {string} token bearer token
 */
const searchConfig = (token) => {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }
}

exports.getTracks = async (query, limit = 10, offset = 0) => {
    try {
        const tracks = await tracksFromSpotify(query, limit, offset);
        return tracks;
    } catch (e) {
        throw Error(e.message);
    };
}

/**
 * handles the client credentials flow
 * @param {string} name search parameter
 * @param {number} limit top limit for pagination
 * @param {number} offset lower limit for pagination
 */
const tracksFromSpotify = async (name, limit, offset) => {
    try {
        const token = await fetchToken();
        const data = await fetchData(token, name, limit, offset);
        if (!data.tracks) {
            throw Error("No tracks found");
        }
        const mappedData = mapData(data);
        return mappedData;
    } catch (e) {
        throw Error(`Error on fetching tracks ${e.status}`);
    }
}

/**
 * gets the bearer token
 */
const fetchToken = async () => {
    const response = await fetch(SPOTIFY_TOKEN_URL, AUTHCONFIG);
    if (!response.ok) {
        const message = `Spotify error: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    if (!body.access_token) throw new Error('Error on token');
    return body.access_token;
}

/**
 * handles the search call 
 * @param {string} token bearer token
 * @param {string} query search parameter
 * @param {number} limit top limit for pagination
 * @param {number} offset lower limit for paginatio
 */
const fetchData = async (token, query, limit, offset) => {
    const encodedParams = `?q=${encodeURIComponent(query)}&type=track&limit=${limit}&offset=${offset}`;
    const response = await fetch(SPOTIFY_SEARCH_URL + encodedParams, searchConfig(token));
    if (!response.ok) {
        const message = `Error at search call: ${response.status}`
        throw new Error(message);
    }
    const body = await response.json();
    return body;
}

/**
 * @param {*} data 
 */
const mapData = (data) => {
    let mappedData = {
        tracks: [],
    };
    data.tracks.items.map(track => {
        mappedData.tracks.push(track);
    });
    mappedData['limit'] = data.tracks.limit;
    mappedData['offset'] = data.tracks.offset;
    mappedData['total'] = data.tracks.total;
    return mappedData;
}


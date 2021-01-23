const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_TOKEN_URL: process.env.SPOTIFY_TOKEN_URL,
    SPOTIFY_SEARCH_URL: process.env.SPOTIFY_SEARCH_URL,
}
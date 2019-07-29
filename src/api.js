import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
    }
});

export default api;
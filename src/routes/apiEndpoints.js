// const API_BASE_URL = "http://192.168.1.38:3000/api";
const API_BASE_URL = "https://nota-backend-delta.vercel.app/api";


export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        ME: `${API_BASE_URL}/auth/me`,
        REGISTER: `${API_BASE_URL}/auth/register`,
    },
    CONNECTIONS: (userId) => `${API_BASE_URL}/connections/${userId}`,
    USER: (userId) => `${API_BASE_URL}/user/${userId}`,
    MESSAGES: (otherUserId) => `${API_BASE_URL}/messages/${otherUserId}`,
    TRACKS: {
        POST: `${API_BASE_URL}/tracks`,
        OTHER: (trackId) => `${API_BASE_URL}/tracks/${trackId}`,
    },
    SONGS: {
        POST: `${API_BASE_URL}/songs`,
        OTHER: (songsId) => `${API_BASE_URL}/songs/${songsId}`,
    }
};

export default API_ENDPOINTS;


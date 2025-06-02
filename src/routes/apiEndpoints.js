const API_BASE_URL = "http://192.168.1.38:3000/api";
//const API_BASE_URL = "http://localhost:3000/api";

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        ME: `${API_BASE_URL}/auth/me`,
        REGISTER: `${API_BASE_URL}/auth/register`,
    },
    CONNECTIONS: (userId) => `${API_BASE_URL}/connections/${userId}`,
    USER: (userId) => `${API_BASE_URL}/user/${userId}`,
    MESSAGES: (otherUserId) => `${API_BASE_URL}/messages/${otherUserId}`,
};

export default API_ENDPOINTS;


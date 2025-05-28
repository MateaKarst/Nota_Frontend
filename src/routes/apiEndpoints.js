const API_BASE_URL = "http://192.168.1.38:3000/api";

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        ME: `${API_BASE_URL}/auth/me`,
        REGISTER: `${API_BASE_URL}/auth/register`,
    },
};

export default API_ENDPOINTS;


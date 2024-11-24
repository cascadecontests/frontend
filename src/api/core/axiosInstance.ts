import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:6969/api"
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';

    return config;
})

export default instance;
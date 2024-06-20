import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',  // Replace with your Django backend API URL
    timeout: 5000,  // Timeout of 5 seconds
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
    }
});

export default instance;

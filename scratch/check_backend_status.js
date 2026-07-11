import axios from 'axios';

async function check() {
    try {
        const response = await axios.get('http://localhost:8080/');
        console.log("Backend status check: SUCCESS", response.status);
    } catch (e) {
        console.error("Backend status check: FAILED", e.message);
    }
}

check();

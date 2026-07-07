import axios from 'axios';

async function run() {
    try {
        console.log("Sending GET request to local http://127.0.0.1:8080/api/chat...");
        const res = await axios.get('http://127.0.0.1:8080/api/chat');
        console.log("Status:", res.status);
        console.log("Data:", res.data);
    } catch (err) {
        console.log("--- ERROR OCCURRED ---");
        console.error(err.message);
    }
}

run();

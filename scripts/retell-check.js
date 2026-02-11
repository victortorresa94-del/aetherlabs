
const axios = require('axios');

const API_KEY = 'key_74d24ea4279ee112632efd961a8a';

async function checkRetell() {
    try {
        console.log("Checking Retell Agents...");
        const agentsResp = await axios.get('https://api.retellai.com/list-agents', {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        console.log("Agents:", JSON.stringify(agentsResp.data, null, 2));

        console.log("\nChecking Retell Phone Numbers...");
        const phonesResp = await axios.get('https://api.retellai.com/list-phone-numbers', {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        console.log("Phone Numbers:", JSON.stringify(phonesResp.data, null, 2));

    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

checkRetell();

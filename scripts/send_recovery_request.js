const http = require('http');

const data = JSON.stringify({
    contact: {
        name: "Victor",
        email: "victortorresa94@gmail.com",
        phone: "+34627281459",
        company: "Suma Saluz"
    },
    channels: ["webchat", "voice"],
    roleName: "Atención al Cliente",
    instructions: "Atender llamadas para mi agencia de fisioterapia",
    knowledge: {
        businessName: "Suma Salut",
        industry: "Fitness / Bienestar",
        description: "ddd",
        faqs: []
    }
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/agents-lab/submit',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();

const axios = require('axios');

async function getOperations() {    
    const config = {
        method: 'get',
        url: 'https://apigateway.coindeal.com/api/v1/wallets/btc/operations',
        headers: { 
            'Authorization': 'Basic {yourBase64Key}', // Edit this part 
            'accept': 'application/json'
        }
    }   
    let res = await axios(config)
    console.log(res.data);
}

getOperations();

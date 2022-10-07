const { default: Mexc } = require('./dist/index');
require('dotenv').config()


const mexc = new Mexc({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    baseUrl: 'https://contract.mexc.com/'
});


(async () => {
    const data = await mexc.ping();
    console.log(data);
})();

async function connectAPI() {
    const connect = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL');
    const connectConverted = await connect.json();
    postMessage(connectConverted.BTCBRL)
}

addEventListener('message', () => {
    connectAPI();
    setInterval(() => connectAPI(), 5000)
})
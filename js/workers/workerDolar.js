async function connectAPI() {
    const connect = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const connectConverted = await connect.json();
    postMessage(connectConverted.USDBRL)
}

addEventListener('message', () => {
    connectAPI();
    setInterval(() => connectAPI(), 5000)
})
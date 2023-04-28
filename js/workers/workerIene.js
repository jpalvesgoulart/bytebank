async function connectAPI() {
    const connect = await fetch('https://economia.awesomeapi.com.br/json/last/JPY-BRL');
    const connectConverted = await connect.json();
    postMessage(connectConverted.JPYBRL);
}

addEventListener('message', () => {
    connectAPI();
    setInterval(() => connectAPI(), 5000)
})
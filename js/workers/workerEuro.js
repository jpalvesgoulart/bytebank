async function connectAPI() {
    const connect = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
    const connectConverted = await connect.json();
    postMessage(connectConverted.EURBRL);
}

addEventListener('message', () => {
    connectAPI();
    setInterval(() => connectAPI(), 5000)
})
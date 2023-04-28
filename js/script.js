import { printPrice, selectPrice } from "./printPrice.js";

//GENERAL FUNCTIONS
function generateSchedule() {
    let date = new Date();
    let hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return hour
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    })
    chart.update();
}


//DOLAR
const graphicDolar = document.getElementById('graficoDolar')

const graphicForDolar = new Chart(graphicDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    },
});

let workerDolar = new Worker('./js/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', e => {
    let schedule = generateSchedule();
    let dolarValue = e.data.ask;
    selectPrice('dolar', dolarValue);
    addData(graphicForDolar, schedule, dolarValue);
})


//IENE
const graphicIene = document.getElementById('graficoIene');

const graphicForIene = new Chart(graphicIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    },
});

let workerIene = new Worker('./js/workers/workerIene.js');
workerIene.postMessage('jpy');

workerIene.addEventListener('message', e => {
    let schedule = generateSchedule();
    let ieneValue = e.data.ask;
    selectPrice('iene', ieneValue);
    addData(graphicForIene, schedule, ieneValue)
})


//BITCOIN
const graphicBitcoin = document.getElementById('graficoBitcoin');

const graphicForBitcoin = new Chart(graphicBitcoin, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Bitcoin',
            data: [],
            borderWidth: 1
        }]
    },
});

let workerBitcoin = new Worker('./js/workers/workerBitcoin.js');
workerBitcoin.postMessage('btc');

workerBitcoin.addEventListener('message', e => {
    let schedule = generateSchedule();
    let bitcoinValue = e.data.ask;
    selectPrice('bitcoin', bitcoinValue);
    addData(graphicForBitcoin, schedule, bitcoinValue);
})


//EURO
const graphicEuro = document.getElementById('graficoEuro');

const graphicForEuro = new Chart(graphicEuro, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Euro',
            data: [],
            borderWidth: 1
        }]
    },
});

let workerEuro = new Worker('./js/workers/workerEuro.js');
workerEuro.postMessage('eur');

workerEuro.addEventListener('message', e => {
    let schedule = generateSchedule();
    let euroValue = e.data.ask;
    selectPrice('euro', euroValue);
    addData(graphicForEuro, schedule, euroValue);
})
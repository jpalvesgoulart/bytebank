const list = document.querySelectorAll('[data-lista]');

export function selectPrice(name, value) {
    list.forEach((listSelected) => {
        if(listSelected.id === name) {
            printPrice(listSelected, name, value)
        }
    })
}

export function printPrice(list, name, value) {
    list.innerHTML = '';
    const names = {
        'dolar': 'dólar',
        'iene': 'iene',
        'bitcoin': 'bitcoin',
        'euro': 'euro'
    }
    const plurals = {
        'dolar': "dólares",
        'iene': "ienes",
        'bitcoin': "bitcoins",
        'euro': 'euros'
    }

    for(let i = 1; i <= 1000; i *= 10) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${i} ${i == 1 ? names[name] : plurals[name]}: R$${(i * value).toFixed(2)}`;
        list.appendChild(listItem);
    }
}
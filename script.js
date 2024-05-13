let kzt = 1
let usdBuy = 429
let usdSell= 431
let eurBuy = 507
let eurSell = 509

sumInput.addEventListener('change', calculate)   // При изменение валюты
currencySelect.addEventListener('change', calculate)  // При изменение валюты

function calculate(){

    let sum = sumInput.value
    let currency = currencySelect.value

    if( currency === 'KZT'){

        usdInput.value = (sum / usdBuy).toFixed(2)
        eurInput.value = (sum / eurBuy).toFixed(2)
        kztInput.value = '-'
    }
    else if( currency === 'USD'){
        kztInput.value = (sum * usdSell).toFixed(2)
        usdInput.value = '-'
        eurInput.value = (kztInput.value / eurBuy).toFixed(2)

    }
    else{
        kztInput.value = (sum * eurSell).toFixed(2)
        eurInput.value = '-'
        usdInput.value = (kztInput.value / usdBuy)

    }

}
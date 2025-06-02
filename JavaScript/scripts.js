


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real / valor da moeda a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)
// TODOS OS VALORES CONVERTIDO PARA,  JÁ ESTA SENDO PEGO PELO SELECT E O BUTTON
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.7
    const realToday = 5.68

    const convertedValue = inputCurrencyValue / dolarToday // o input vai pegar o dolar do dia e converter 

    // abaixo formatar o valor a converter
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",/*  alor da moeda a ser convertido*/{
        style:"currency",
        currency:"BRL"
    }).format( inputCurrencyValue) 


    // abaixo formatar o valor convertido

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD"
    }).format(convertedValue)


}

convertButton.addEventListener("click", convertValues)


//inputCurrencyValue = o valor do input digitado aparece na moeda a converter
// currencyValueConverted.innerHTML = convertedValue // convertedValue irá mostrar o valor convertido
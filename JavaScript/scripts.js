


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real / valor da moeda a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)
    // TODOS OS VALORES CONVERTIDO PARA,  JÁ ESTA SENDO PEGO PELO SELECT E O BUTTON
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.7
    const realToday = 5.68

    // const convertedValue = inputCurrencyValue / dolarToday // o input vai pegar o dolar do dia e converter 

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }



    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }



    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }



    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


    // abaixo formatar o valor a converter

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    // abaixo formatar o valor convertido

    /* currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style:"currency",
         currency: "USD"
     }).format(convertedValue)*/


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) //função para mudar a bandeira

convertButton.addEventListener("click", convertValues)


//inputCurrencyValue = o valor do input digitado aparece na moeda a converter
// currencyValueConverted.innerHTML = convertedValue // convertedValue irá mostrar o valor convertido
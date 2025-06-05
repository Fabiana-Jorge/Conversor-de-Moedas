


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyFromSelect = document.querySelector(".currency-from")



function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace(",", "."))

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const currencyFromSelect = document.querySelectorAll("select")[0]
    const moedaOrigem = currencyFromSelect.value
    const moedaDestino = currencySelect.value

    const taxas = {
        real: { dolar: 1 / 5.2, euro: 1 / 6.2, libra: 1 / 7.7, real: 1 },
        dolar: { real: 5.2, euro: 5.2 / 6.2, libra: 5.2 / 7.7, dolar: 1 },
        euro: { real: 6.2, dolar: 6.2 / 5.2, libra: 6.2 / 7.7, euro: 1 },
        libra: { real: 7.7, dolar: 7.7 / 5.2, euro: 7.7 / 6.2, libra: 1 },
    }

    const taxa = taxas[moedaOrigem][moedaDestino]
    const valorConvertido = inputCurrencyValue * taxa

    // Mostrar valor de origem formatado
    const moedaFormatadaOrigem = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        libra: "GBP"
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: moedaFormatadaOrigem[moedaOrigem]
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: moedaFormatadaOrigem[moedaDestino]
    }).format(valorConvertido)
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


    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-img-from")


    if (currencyFromSelect.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano"
        currencyImageFrom.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencyFromSelect.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (currencyFromSelect.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencyFromSelect.value == "real") {
        currencyNameFrom.innerHTML = "Real brasileiro"
        currencyImageFrom.src = "./assets/brasil 2.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) //função para mudar a bandeira

convertButton.addEventListener("click", convertValues)



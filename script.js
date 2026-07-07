    /*=============================================================
     PRIMEIRO PROJETO JAVASCRIPT 
     ==============================================================*/

const convertButtom = document.getElementById("convert") // mapeando botão
const valueSelectOne = document.getElementById("option-one") // mapeando select 
const valueSelectTwo = document.getElementById("option-two") // mapeando select


function changeSelect () { // função de alteração  

const currencyName = document.getElementById("currency-name-one") // mapeando texto que será alterado 
const currencyNameTwo = document.getElementById("currency-name-two")
const currencyImg = document.getElementById("currency-img-one") // mapeando img que será alterada
const currencyImgTwo = document.getElementById("currency-img-two")


if (valueSelectOne.value == "real")  {

    currencyName.innerHTML = "Real"
    currencyImg.src = "./assets/real.png"
}

if (valueSelectOne.value == "dolar")  {

    currencyName.innerHTML = "Dolar"
    currencyImg.src = "./assets/dolar.png"
}

if (valueSelectOne.value == "euro")  {

    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
}

if (valueSelectOne.value == "libra") {

    currencyName.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png"
}

if (valueSelectOne.value == "bitcoin") {

    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
}

 /*=============================================================
     PRIMEIRO Name
     ==============================================================*/

if (valueSelectTwo.value == "real")  {

    currencyNameTwo.innerHTML = "Real"
    currencyImgTwo.src = "./assets/real.png"
}

if (valueSelectTwo.value == "dolar")  {

    currencyNameTwo.innerHTML = "Dolar"
    currencyImgTwo.src = "./assets/dolar.png"
}

if (valueSelectTwo.value == "euro")  {

    currencyNameTwo.innerHTML = "Euro"
    currencyImgTwo.src = "./assets/euro.png"
}

if (valueSelectTwo.value == "libra") {

    currencyNameTwo.innerHTML = "Libra"
    currencyImgTwo.src = "./assets/libra.png"
}

if (valueSelectTwo.value == "bitcoin") {

    currencyNameTwo.innerHTML = "Bitcoin"
    currencyImgTwo.src = "./assets/bitcoin.png"
}

clickButtom()

}

function clickButtom () { // função de conversão

    const inputValue = document.getElementById("cash").value // mapeando input 
    const toConvert = document.getElementById("to-convert") // mapeando texto numerico de valor
    const theConverted = document.getElementById("the-converted") // mapeando texto numerico de valor convertido

    
    const valueCurrency = { 
    real: 1,
    dolar: 5.18,
    euro: 5.94,
    libra: 6.84,
    bitcoin: 325168
    }

    const convertValue = inputValue * valueCurrency[valueSelectOne.value] 

    //const convertValue = inputValue / dolarDay - PODEMOS FAZER DIRETO NA FORMATAÇÃO

    if (valueSelectOne.value == "real") {

        toConvert.innerHTML = new Intl.NumberFormat("pt-BR", { //formatqando valor digitado para moeda brasileira
            style: "currency",
            currency: "BRL"
        }).format(inputValue) 
    }

    if (valueSelectOne.value == "dolar") {

        toConvert.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency",
            currency: "USD"
        }).format(inputValue) 
    }

    if (valueSelectOne.value == "euro") {

        toConvert.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency",
            currency: "EUR"
        }).format(inputValue) 
    }

    if (valueSelectOne.value == "libra") {

        toConvert.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency",
            currency: "GBP"
        }).format(inputValue) 
    }

    if (valueSelectOne.value == "bitcoin") {

        toConvert.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency",
            currency: "BTC"
        }).format(inputValue) 
    }

    /*=============================================================
     SEGUNDO VALOR 
     ==============================================================*/
    
// Dólar Americano
    if (valueSelectTwo.value == "real") {

        theConverted.innerHTML = new Intl.NumberFormat("pt-BR", { //formatqando valor digitado para moeda brasileira
            style: "currency",
            currency: "BRL"
        }).format(convertValue / valueCurrency[valueSelectTwo.value]) 
    }

    if (valueSelectTwo.value == "dolar") {
        theConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertValue / valueCurrency[valueSelectTwo.value])
    }

// Euro
    if (valueSelectTwo.value == "euro") {
        theConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertValue / valueCurrency[valueSelectTwo.value])
    }

// Libra Esterlina
    if (valueSelectTwo.value == "libra") {
        theConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertValue / valueCurrency[valueSelectTwo.value])
    }

// Bitcoin
    if (valueSelectTwo.value == "bitcoin") {
        theConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(convertValue / valueCurrency[valueSelectTwo.value])
    }
    
    // alert(theConverted.innerHTML) - MELHOR QUE cosole.log(theConverted.innerHTML)

}

    valueSelectOne.addEventListener("change", changeSelect)
    valueSelectTwo.addEventListener("change", changeSelect)
    convertButtom.addEventListener("click", clickButtom)


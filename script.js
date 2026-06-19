    /*=============================================================
     PRIMEIRO PROJETO JAVASCRIPT 
     ==============================================================*/

const convertButtom = document.getElementById("convert")
const valueSelect = document.getElementById("option")


function changeSelect () {

const currencyName = document.getElementById("currency-name")
const currencyImg = document.getElementById("currency-img")

if (valueSelect.value == "dolar")  {

    currencyName.innerHTML = "Dolar"
    currencyImg.src = "./assets/dolar.png"
}

if (valueSelect.value == "euro")  {

    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
}

if (valueSelect.value == "libra") {

    currencyName.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png"
}

if (valueSelect.value == "bitcoin") {

    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
}

clickButtom()

}

function clickButtom () {

    const inputValue = document.getElementById("cash").value 
    const toConvert = document.getElementById("to-convert")
    const theConverted = document.getElementById("the-converted")

    

    const dolarDay = 5.18
    const euroDay = 5.94
    const libraDay = 6.84
    const bitcoinDay = 325168


    //const convertValue = inputValue / dolarDay - PODEMOS FAZER DIRETO NA FORMATAÇÃO


    toConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue) 

    /*=============================================================
     SEGUNDO VALOR 
     ==============================================================*/
    
// Dólar Americano
if (valueSelect.value == "dolar") {
    theConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValue / dolarDay)
}

// Euro
if (valueSelect.value == "euro") {
    theConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroDay)
}

// Libra Esterlina
if (valueSelect.value == "libra") {
    theConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValue / libraDay)
}

// Bitcoin
if (valueSelect.value == "bitcoin") {
    theConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
    }).format(inputValue / bitcoinDay)
}
    
    // alert(theConverted.innerHTML) - MELHOR QUE cosole.log(theConverted.innerHTML)

}

    valueSelect.addEventListener("change", changeSelect)
    convertButtom.addEventListener("click", clickButtom)

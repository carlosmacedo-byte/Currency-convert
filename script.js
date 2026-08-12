/*=============================================================
 PRIMEIRO PROJETO JAVASCRIPT - CONVERSOR PRINCIPAL
 ==============================================================*/
const convertButtom = document.getElementById("convert");
const valueSelectOne = document.getElementById("option-one");
const valueSelectTwo = document.getElementById("option-two");

function changeSelect() {  
    const currencyNameOne = document.getElementById("currency-name-one");
    const currencyNameTwo = document.getElementById("currency-name-two");
    const currencyImgOne = document.getElementById("currency-img-one");
    const currencyImgTwo = document.getElementById("currency-img-two");
    const inputHolder = document.getElementById("cash");

    // CLEAN CODE: Mapeamento centralizado de informações visuais
    const currencyVisuals = {
        real: { name: "Real", img: "./assets/moedareal.png", placeholder: "R$ 0,00" },
        dolar: { name: "Dolar", img: "./assets/moedadolar.png", placeholder: "US$ 0,00" },
        euro: { name: "Euro", img: "./assets/moedaeuro.png", placeholder: "€ 0,00" },
        libra: { name: "Libra", img: "./assets/moedalibra.png", placeholder: "£ 0,00" },
        yuan: { name: "Yuan", img: "./assets/moedayang.png", placeholder: "¥ 0,00" },
        rublo: { name: "Bitcoin", img: "./assets/moedabitcoin.png", placeholder: "₿ 0,00" },
        ether: { name: "Ether", img: "./assets/moedaether.png", placeholder: "Ξ 0,00" }
    };

    // ALTERAÇÕES VISUAIS - PRIMEIRA MOEDA
    const configOne = currencyVisuals[valueSelectOne.value];
    if (configOne) {
        currencyNameOne.innerHTML = configOne.name;
        currencyImgOne.src = configOne.img;
        inputHolder.placeholder = configOne.placeholder;
    }

    // ALTERAÇÕES VISUAIS - SEGUNDA MOEDA
    const configTwo = currencyVisuals[valueSelectTwo.value];
    if (configTwo) {
        currencyNameTwo.innerHTML = configTwo.name;
        currencyImgTwo.src = configTwo.img;
    }

    clickButtom();
}

async function clickButtom() { 
    const inputValue = document.getElementById("cash").value; 
    const toConvert = document.getElementById("to-convert"); 
    const theConverted = document.getElementById("the-converted"); 

    try {
        // Requisição segura e limpa utilizando a rota pública padrão
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,ARS-BRL,RUB-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL,USDT-BRL,XRP-BRL,SOL-BRL,BNB-BRL");
        const data = await response.json();

        const valueCurrency = {
            real: 1,
            dolar: parseFloat(data.USDBRL?.high),
            euro: parseFloat(data.EURBRL?.high),
            libra: parseFloat(data.GBPBRL?.high),
            yuan: parseFloat(data.CNYBRL?.high),
            peso: parseFloat(data.ARSBRL?.high),
            rublo: parseFloat(data.RUBBRL?.high),
        };

        const rateOne = valueCurrency[valueSelectOne.value];
        const rateTwo = valueCurrency[valueSelectTwo.value];

        // Validação de integridade para evitar valores nulos (NaN)
        if (isNaN(rateOne) || isNaN(rateTwo)) {
            theConverted.innerHTML = "Indisponível na API";
            theConverted.style.color = "red";
            theConverted.style.fontSize = "1rem";
            return;
        }

        theConverted.style.color = ""; 
        const convertValue = inputValue * rateOne; 

        const currencyMap = {
            real: { locale: "pt-BR", currency: "BRL" },
            dolar: { locale: "en-US", currency: "USD" },
            euro: { locale: "de-DE", currency: "EUR" },
            libra: { locale: "en-GB", currency: "GBP" },
            yuan: { locale: "zh-CN", currency: "CNY" },
            peso: { locale: "es-AR", currency: "ARS" },
            rublo: { locale: "ru-RU", currency: "RUB" },
        };

        const configOne = currencyMap[valueSelectOne.value];
        const configTwo = currencyMap[valueSelectTwo.value];

        if (configOne) {
            toConvert.innerHTML = new Intl.NumberFormat(configOne.locale, {
                style: "currency",
                currency: configOne.currency
            }).format(inputValue || 0);
        }

        if (configTwo) {
            theConverted.innerHTML = new Intl.NumberFormat(configTwo.locale, {
                style: "currency",
                currency: configTwo.currency
            }).format(convertValue / rateTwo);
        }

    } catch (error) {
        console.error("Erro na requisição da API:", error);
        theConverted.innerHTML = "Erro de Conexão";
    }
}

// OUVINTES DE EVENTOS (LISTENERS)
valueSelectOne.addEventListener("change", changeSelect);
valueSelectTwo.addEventListener("change", changeSelect);
convertButtom.addEventListener("click", clickButtom);
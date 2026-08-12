// MAPEAMENTO DOS ELEMENTOS DO PAINEL DE CRIPTOMOEDAS
const convertButtomCrypto = document.getElementById("convert-crypto");
const valueSelectOneCrypto = document.getElementById("option-one-crypto");
const valueSelectTwoCrypto = document.getElementById("option-two-crypto");

function changeSelectCrypto() { 
    
    const currencyNameOne = document.getElementById("currency-name-one-crypto");
    const currencyNameTwo = document.getElementById("currency-name-two-crypto");
    const currencyImgOne = document.getElementById("currency-img-one-crypto");
    const currencyImgTwo = document.getElementById("currency-img-two-crypto");
    const inputHolder = document.getElementById("cash-crypto"); 

    // CLEAN CODE: Mapeamento centralizado de informações visuais
    const cryptoVisuals = {
        bitcoin: { name: "Bitcoin", img: "./assets/moedabitcoin.png", placeholder: "₿ 0,00" },
        ether: { name: "Ether", img: "./assets/moedaether.png", placeholder: "Ξ 0,00" },
        dogecoin: { name: "Dogecoin", img: "./assets/moedadogecoin.png", placeholder: "Ð 0,00" },
        litecoin: { name: "Litecoin", img: "./assets/moedalitecoin.png", placeholder: "Ł 0,00" },
        xrp: { name: "XRP", img: "./assets/moedaxrp.png", placeholder: "✕ 0,00" },
        solana: { name: "Solana", img: "./assets/moedasolana.png", placeholder: "◎ 0,00" },
        binancecoin: { name: "Binance", img: "./assets/moedabinance.png", placeholder: "BNB 0,00" }
    };

    // ALTERAÇÕES VISUAIS - PRIMEIRA MOEDA
    const configOne = cryptoVisuals[valueSelectOneCrypto.value];
    const configTwo = cryptoVisuals[valueSelectTwoCrypto.value];

    if (configOne) {
        currencyNameOne.innerHTML = configOne.name;
        currencyImgOne.src = configOne.img;
        inputHolder.placeholder = configOne.placeholder;
    }

    // ALTERAÇÕES VISUAIS - SEGUNDA MOEDA

    if (configTwo) {
        currencyNameTwo.innerHTML = configTwo.name;
        currencyImgTwo.src = configTwo.img;
    }

    clickButtomCrypto();
}

async function clickButtomCrypto() { 

    const inputValue = document.getElementById("cash-crypto").value; 
    const toConvert = document.getElementById("to-convert-crypto"); 
    const theConverted = document.getElementById("the-converted-crypto"); 

    try {
        // Requisição segura e sem token exposto
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,ARS-BRL,RUB-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL,USDT-BRL,XRP-BRL,SOL-BRL,BNB-BRL");
        const data = await response.json();

        const valueCurrency = {
            bitcoin: parseFloat(data.BTCBRL?.high),
            ether: parseFloat(data.ETHBRL?.high),
            dogecoin: parseFloat(data.DOGEBRL?.high),
            litecoin: parseFloat(data.LTCBRL?.high),
            xrp: parseFloat(data.XRPBRL?.high),
            solana: parseFloat(data.SOLBRL?.high),
            binancecoin: parseFloat(data.BNBBRL?.high),
        };

        const rateOne = valueCurrency[valueSelectOneCrypto.value];
        const rateTwo = valueCurrency[valueSelectTwoCrypto.value];

        // Proteção contra moedas sem cotação
        if (isNaN(rateOne) || isNaN(rateTwo)) {
            theConverted.innerHTML = "Indisponível na API";
            theConverted.style.color = "red";
            theConverted.style.fontSize = "1rem";
            return;
        }

        theConverted.style.color = ""; 
        const convertValue = inputValue * rateOne; 

        const currencyMap = {
            bitcoin: { locale: "en-US", currency: "BTC" },
            ether: { locale: "en-US", currency: "ETH" },
            dogecoin: { locale: "en-US", currency: "DOGE" },
            litecoin: { locale: "en-US", currency: "LTC" },
            xrp: { locale: "en-US", currency: "XRP" },
            solana: { locale: "en-US", currency: "SOL" },
            binancecoin: { locale: "en-US", currency: "BNB" },
        };

        const configOne = currencyMap[valueSelectOneCrypto.value];
        const configTwo = currencyMap[valueSelectTwoCrypto.value];

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

// ADICIONANDO OS OUVINTES DE EVENTOS (LISTENERS)
valueSelectOneCrypto.addEventListener("change", changeSelectCrypto);
valueSelectTwoCrypto.addEventListener("change", changeSelectCrypto);
convertButtomCrypto.addEventListener("click", clickButtomCrypto);
console.log("Nani Shree");

const fromAmount = document.querySelector('.amount');
const convertedAmmountE = document.querySelector('.coverted-amount');
const fromCurrencyE = document.querySelector('.fromcurrency');
const toCurrencyE = document.querySelector('.tocurrency');
const Result = document.querySelector('.result');

const countries = [
      { code: 'INR', name: 'Rupia indiana' },
      { code: 'USD', name: 'Dolar' },
      { code: 'EUR', name: 'Euro' },
      { code: 'GBP', name: 'Libra britânica' },
      { code: 'JPY', name: 'Yen japonês' },
      { code: 'CAD', name: 'Dólar canadense' },
      { code: 'AUD', name: 'Dólar australiano' },
      { code: 'CHF', name: 'Franco suíço' },
      { code: 'CNY', name: 'Yuan chinês' },
      { code: 'NZD', name: 'Dolar Nova Zelandia' },
      { code: 'AED', name: 'Dirham dos Emirados Árabes Unidos' },
      { code: 'MXN', name: 'Peso Mexicano' },
      { code: 'SGD', name: 'dolar Singapura' },
      { code: 'HKD', name: 'Dolar Hong Kong' },
      { code: 'BRL', name: 'Real Brasileiro' }
];


countries.forEach(country => {
      const option1 = document.createElement('option');
      const option2 = document.createElement('option');

      option1.value = option2.value = country.code;
      option1.textContent = option2.textContent = `${country.code} ${country.name}`;

      fromCurrencyE.appendChild(option1);
      toCurrencyE.appendChild(option2);
      fromCurrencyE.value = "USD";
      toCurrencyE.value = "INR";
});

const getExchangeRate = async () => {
      const amount = parseFloat(fromAmount.value);
      const fromCurrency = fromCurrencyE.value;
      const toCurrency = toCurrencyE.value;



      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();

      const conversionRate = data.rates[toCurrency];
      const convertedAmount = amount * conversionRate;

      convertedAmmountE.value = convertedAmount;
      Result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
}

fromAmount.addEventListener('input', getExchangeRate);

fromAmount.addEventListener('change', getExchangeRate);

toCurrencyE.addEventListener('change', getExchangeRate);

window.addEventListener('load', getExchangeRate);

const exchangeRates = {
    'USD': 1.0,
    'EUR': 0.85,
    'GBP': 0.75,
};

function convertCurrency(amount, sourceCurrency, targetCurrency) {
    // Write code here =========
    return new Promise((resolve,reject)=>{

        if(!exchangeRates[sourceCurrency] || !exchangeRates[targetCurrency])
        reject("Error converting currency: Invalid currency");

        else{
            const res = amount*exchangeRates[sourceCurrency]*exchangeRates[targetCurrency];
            resolve(res.toFixed(2));
        }
    })
}
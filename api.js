let button = document.getElementById('btn');
let amountToCount = document.getElementById('amountToCount');
let resultField = document.getElementById('result');
let foundRate;


function onConvertBtnClick(){
    let ending = document.getElementById('select').options[document.getElementById('select').selectedIndex].value;
    let url = 'http://api.nbp.pl/api/exchangerates/rates/a/';
    let currency = ending
    let urlApi = (url + currency+'/?format=json')

    fetch(urlApi).then(resp => resp.json()).then((response) => {
        
        foundRate = {
            mid: response.rates[0].mid,
        }   
        let sum = foundRate.mid * amountToCount.value
       
        resultField.innerHTML = sum + ' PLN'
    })
}; 
onConvertBtnClick()












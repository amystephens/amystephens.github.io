const apiURLALERT = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&exclude=minutely,hourly&appid=9a26765da4794e6d99960311611fab93&units=imperial';


fetch(apiURLALERT)
    .then((response) => response.json())
    .then((jsObject) => {

//alert
var alertme = jsObject.alerts.description;

    window.alert(alertme);    

});
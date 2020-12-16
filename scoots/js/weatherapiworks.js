const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=9a26765da4794e6d99960311611fab93&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=9a26765da4794e6d99960311611fab93&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //weather overlay box
        document.getElementById('current-temp').innerHTML = "Temperature: " + Math.round(jsObject.main.temp) + " &#176;F";
        
        document.getElementById('humidity').textContent = "Humidity: " + jsObject.main.humidity;
        //Currently: description
        document.getElementById('currdescription').textContent = "Currently: " + jsObject.weather[0].description;


    });

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //forecast box
        //forecast day of the week

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";


        var gridTop = document.getElementsByClassName("dayweek");
        var forecastImg = document.getElementsByClassName("forecastimg");
        var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        var forecastTemp = document.getElementsByClassName("forecasttemp");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);

            gridTop[i].textContent = weekday[d.getDay()];

            //forecast icon and then description
            const imagesfc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png'; // note the concatenation
            const description = data[i].weather[0].description; // note how we reference the weather array
            forecastImg[i].setAttribute('src', imagesfc); // focus on the setAttribute() method
            forecastImg[i].setAttribute('alt', description);

            //forecast temp
            forecastTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
        }

    });
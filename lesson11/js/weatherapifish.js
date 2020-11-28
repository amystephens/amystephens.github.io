const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=9a26765da4794e6d99960311611fab93&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=9a26765da4794e6d99960311611fab93&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //weather overlay box
        document.getElementById('current-temp').innerHTML = Math.round(jsObject.main.temp) + " &#176;F";
        document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        //Currently: description
        document.getElementById('currdescription').textContent = jsObject.weather[0].description;
        //calculate windchill
        let t = (Math.round(jsObject.main.temp));
        let s = (Math.round(jsObject.wind.speed));
        let wc = "N/A";
        if (t <= 50 && s >= 3.0) {
            let calc = (35.74 + (.6215 * t)) - (35.75 * (Math.pow(s, .16))) + (.4275 * (t * (Math.pow(s, .16))));
            wc = Math.round(calc) + " &#176;F";
        }
        document.getElementById("windchill").innerHTML = wc;
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
        

        var gridTop = document.getElementsByClassName("gridtop");
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
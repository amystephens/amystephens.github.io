const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&exclude=minutely,hourly&appid=9a26765da4794e6d99960311611fab93&units=imperial';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //forecast box
        //forecast day of the week

        var forecastImg = document.getElementsByClassName("forecastimg");
        var data = jsObject.daily;
        var forecastTemp = document.getElementsByClassName("forecasttemp");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);



            //forecast icon and then description
            const imagesfc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png'; // note the concatenation
            const description = data[i].weather[0].description; // note how we reference the weather array
            forecastImg[i].setAttribute('src', imagesfc); // focus on the setAttribute() method
            forecastImg[i].setAttribute('alt', description);

            //forecast temp
            forecastTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
        }

    });
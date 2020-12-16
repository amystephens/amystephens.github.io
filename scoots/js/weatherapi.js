const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&exclude=minutely,hourly&appid=9a26765da4794e6d99960311611fab93&units=imperial';


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

// today's weather in Cozumel

        //Currently: description
        document.getElementById('currdescription').textContent = "Currently: " + jsObject.current.weather[0].description;
        //current temp
        document.getElementById('current-temp').innerHTML = "Temperature: " + Math.round(jsObject.current.temp) + " &#176;F";
        //current humidity
        document.getElementById('humidity').textContent = "Humidity: " + jsObject.current.humidity;
        //wind speed
        document.getElementById('windspeed').textContent = "Wind Speed: " + Math.round(jsObject.current.wind_speed);

    });
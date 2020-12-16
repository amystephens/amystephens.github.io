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


// three day forecast
        var dayWeek = document.getElementById("dayweek");

        var forecastImg = document.getElementsByClassName("forecastimg");

        var forecastTemp = document.getElementsByClassName("forecasttemp");

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        //const gridTop = document.getElementsByClassName("gridtop");



        //var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        //var data = jsObject.daily.filter(item => item.temp.includes("day"));
        var data = jsObject.daily;

        for (var i = 0; i < data.length; i++) {
            //forecast day of the week at top
            var date = new Date();
            var number = date.getDay();
            var nametheday = weekday[number];
    
            console.log(nametheday);
    
            dayWeek.innerHTML = nametheday;

            //forecast icon 
            const imagesfc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png'; 
            
            //forecast description to use the alt
            const description = data[i].weather[0].description; 
            // set the image source
            forecastImg[i].setAttribute('src', imagesfc); 
            // set the alt description
            forecastImg[i].setAttribute('alt', description);

            //forecast temp
            forecastTemp[i].innerHTML = Math.round(data[i].temp.day) + " &#176;F";
        }

        //var today = jsObject.current;
        //var today = new Date();
        //var data = jsObject.daily.includes(today);
        
        //use this to check the console
        //for (var i = 0; i < number.length; i++) {
            //gridTop[i].innerHTML = number[i];

        
           //console.log(jsObject); //use this to check the console
 
    
    });
const imagesForecast = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const forecastDescription = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon1').setAttribute('src', imagesForecast);  // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', forecastDescription);




    document.getElementById('icon').textContent = jsObject.weather[0].description;


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const description = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', description);


    const description = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', description);

    build the ids 
    loop through
    if it is 18:00 then 



  cars = ["BMW","Volvo","Saab","Ford"];
  var i = 0;
  var text = "";
  
  while (cars[i]) {
      text += cars[i] + "<br>";
      i++;
  } 


//forecast img and temp
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const description = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('forecastimg').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon1').setAttribute('alt', description);
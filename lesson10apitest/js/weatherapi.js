const apiURL = 'api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9a26765da4794e6d99960311611fab93';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

// document.getElementById('current-temp').textContent = jsObject.main.temp;
  
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
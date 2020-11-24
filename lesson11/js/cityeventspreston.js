const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function cityEvents(cityName) {

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {

      const town = jsonObject['towns'];
      const filtered = town.filter(town => (town.name == cityName));

      let h5 = document.createElement('h5');
      let eventUl = document.createElement('ul');

      h5.textContent = 'Upcoming Events in ' + filtered[0].name;

      for (let i = 0; i < filtered[0].events.length; i++) {
        let eventLi = document.createElement('li');
        let cityHtml = document.getElementsByClassName("cityname");
        let cityName = filtered[0].name.includes(cityHtml);

        eventLi.textContent = filtered[0].events[i];
        eventUl.appendChild(eventLi);
      }

      document.querySelector('div.events').appendChild(h5);
      document.querySelector('div.events').appendChild(eventUl);

    });
}

cityEvents('Preston');
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject['towns'];
    const filtered = town.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

    for (let i = 0; i < filtered.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement("img");
      let cardText = document.createElement("div");
      let cardImg = document.createElement("div");

      h2.textContent = filtered[i].name;
      motto.textContent = filtered[i].motto;
      founded.textContent = 'Year Founded: ' + filtered[i].yearFounded;
      population.textContent = 'Population: ' + filtered[i].currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + filtered[i].averageRainfall;
      image.setAttribute('src', 'images/' + filtered[i].photo);
      image.setAttribute('alt', 'Picture of ' + filtered[i].name);

      cardText.appendChild(h2);
      cardText.appendChild(motto);
      cardText.appendChild(founded);
      cardText.appendChild(population);
      cardText.appendChild(rainfall);
      card.appendChild(cardText);
      cardImg.appendChild(image);
      card.appendChild(cardImg);

      cardText.setAttribute("class", "cardText");
      motto.setAttribute("class", "motto");
      cardImg.setAttribute("class", "cardImg");

      document.querySelector('div.cards').appendChild(card);
    }

  });

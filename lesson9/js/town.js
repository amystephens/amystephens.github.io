const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];
    const filtered = town.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

    //town.forEach (town =>) {
    for (let i = 0; i < filtered.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement("img");
        
        h2.textContent = filtered[i].name;
        motto.textContent =  filtered[i].name;
        founded.textContent = 'Year Founded: ' + filtered[i].yearFounded;
        population.textContent = 'Population: ' + filtered[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + filtered[i].averageRainfall;
        image.setAttribute('src', 'images/' + filtered[i].photo);
        image.setAttribute('alt', 'Picture of ' +  filtered[i].name);

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
    }

  });

  

  

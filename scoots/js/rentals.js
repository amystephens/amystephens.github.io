const requestURL = 'https://amystephens.github.io/scoots/data/rentals.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {
        let card = document.createElement('tr');
        
        let name = document.createElement('td');
        let passengers = document.createElement('td');
        let half = document.createElement('td');
        let full = document.createElement('td');
        let walkinhalf = document.createElement('td');
        let walkinfull = document.createElement('td');
        let image = document.createElement("img");
        
        name.innerHTML = rentals[i].type + "<br>" + rentals[i].name;
        //h2.innerHTML = `${prophets[i].name} <span class="highlight">${prophets[i].lastname}</span>`; //Bro Blazzard said this is the newer way to write it rather than doing the textContent and if you want to use a span you have to do it this way
        passengers.textContent = rentals[i].passengers;
        half.textContent = "$" + rentals[i].half;
        full.textContent = "$" + rentals[i].full;
        walkinhalf.textContent = "$" + rentals[i].walkinhalf;
        walkinfull.textContent = "$" + rentals[i].walkinfull;
        image.setAttribute('src', 'images/' + rentals[i].photo);
        image.setAttribute('alt', 'Picture of ' + rentals[i].name);

        card.appendChild(image);
        
        card.appendChild(name);
        card.appendChild(passengers);
        card.appendChild(half);
        card.appendChild(full);
        card.appendChild(walkinhalf);
        card.appendChild(walkinfull);

        name.setAttribute("colspan", "2");

        document.querySelector('tbody.cards').appendChild(card);
    }

  });

  

  

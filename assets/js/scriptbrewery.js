let fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);
let citySearch = document.getElementById('citySearch');

//to get locations from local storage
function getLocations() {
  let locations = localStorage.getItem("savedLocations");
  if (locations === null) {
    locations = [];
  } else {
    locations = JSON.parse(locations);
  }
  return locations;
}

//to save the location
function saveLocation(city) {
  let currentLocation = getLocations();
  let location = {
    city: city
  };

  let found = false;

  for (let i = 0; i < currentLocation.length; i++) {
    if (currentLocation[i].city === city) {
      found = true;
    }
  }

  if (!found) {
    currentLocation.push(location);
  }

  localStorage.setItem('savedLocations', JSON.stringify(currentLocation));
}

function fillLocationsList(){
  let locationChoices = getLocations();

}

// To save to local storage

function addLocations(){

  let locationChoicesEl = document.getElementById("locationChoices");
  let locations = getLocations();
  locationChoicesEl.innerHTML = "";
  for(let i = 0; i < locations.length; i++){
    console.log(locations[i]);
    let listEl = document.createElement("li");
    let buttonEl = document.createElement("button");
    buttonEl.classList.add("savedBtnLocation");
    buttonEl.innerText = locations[i].city;

    buttonEl.onclick = function() {
      document.getElementById("citySearch").value = locations[i].city;
      getApi();
    };

    listEl.appendChild(buttonEl);
    locationChoicesEl.appendChild(listEl);
  }
}

addLocations();

//API call

function getApi() {
  saveLocation(citySearch.value);

  addLocations();

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch.value}&per_page=3`)
    .then(response => response.json())
    .then(function (data) {
      var breweryResults = document.querySelector(".brewInfo");
      breweryResults.innerHTML="";
      for (var i = 0; i < data.length; i++) {

        displayBeerInfo(data[i]); // AL Update- Recently added this to the for-loop, since I created a function for it below.
      }
    })

    .catch(err => console.error(err));
}

//AL UPDATE-

let brewInfo = document.querySelector(".brewInfo")

//Creating a function 
//-- To display the data as Name: , Location : , etc.
function displayBeerInfo(data) {
  console.log(data, "from display function");

  //Creation of elements
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card-content");

  let cardHeader = document.createElement("header");
  cardHeader.textContent = citySearch.value;
  cardHeader.setAttribute("class", "card-header-title");


  let name = document.createElement("div");
  // name.setAttribute("class", "card-content");

  let phone = document.createElement("div");
  // phone.setAttribute("class", "card-content");


  let address = document.createElement("div");
  // address.setAttribute("class", "card-content")

  let website = document.createElement("a");
  website.classList.add("savedLocationButton");
  website.setAttribute("href", data.website_url);
  website.setAttribute("target", '_blank');


  let span = document.createElement("span")


  //Injection of data
  name.textContent = "Name of Brewery: " + data.name;
  phone.textContent = "Phone Number: " + data.phone;
  address.textContent = "Address: " + data.street + " " + data.state + " " + data.postal_code;
  website.textContent = "Click Here";


  //Append
  cardHeader.append(span)
  //changed from cardTitle to cardHeader
  cardContent.append(cardHeader, name, phone, address, website)
  //changed from cardText to cardContent
  card.append(cardContent)
  let breweryResults = document.querySelector(".brewInfo");
  breweryResults.append(card)




}






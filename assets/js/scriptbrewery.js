var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);
let citySearch = document.getElementById('citySearch');


function getApi() {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch.value}&per_page=3`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
      var breweryResults = document.querySelector(".brewInfo");
      breweryResults.innerHTML="";
      for (var i = 0; i < data.length; i++) {

        // var barName = data[i].name
        // console.log(barName)
        displayBeerInfo(data[i]); // AL Update- Recently added this to the for-loop, since I created a function for it below.

        // // create
        // var $li = $("<li>");
        // var $h1 = $("<h1>");
        // var $h2 = $("<h2>");
        // var $h3 = $("<h3>");

        // // modify
        // $h1.text(barName);
        // $h2.text(data[i].phone);
        // $h3.text(data[i].street + " " + data[i].state + " " + data[i].postal_code);

        // // append
        // $("#breweries-results ul").append($li)
        // $li.append($h1, $h2, $h3)

      }
    })

    .catch(err => console.error(err));
}

//AL UPDATE-

var brewInfo = document.querySelector(".brewInfo")

//Creating a function 
//-- To display the data as Name: , Location : , etc.
function displayBeerInfo(data) {
  console.log(data, "from display function");

  //Creation of elements
  var card = document.createElement("div");
  card.setAttribute("class", "card");

  var cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card-content");

  var cardHeader = document.createElement("header");
  cardHeader.textContent = citySearch.value;
  cardHeader.setAttribute("class", "card-header-title");


  var name = document.createElement("div");
  name.setAttribute("class", "card-content");

  var website = document.createElement("a");
  website.setAttribute("src", data.website_url);
  website.textContent = "Link"

  let phone = document.createElement("div");
  phone.setAttribute("class", "card-content");


  var address = document.createElement("div");
  address.setAttribute("class", "card-content")



  let span = document.createElement("span")


  //Injection of data
  name.textContent = "Name of Brewery: " + data.name;
  phone.textContent = "Phone Number: " + data.phone;
  address.textContent = "Address: " + data.street + " " + data.state + " " + data.postal_code;


  //Append
  cardHeader.append(span)
  //changed from cardTitle to cardHeader
  cardContent.append(cardHeader, name, phone, address, website)
  //changed from cardText to cardContent
  card.append(cardContent)
  var breweryResults = document.querySelector(".brewInfo");
  breweryResults.append(card)




}






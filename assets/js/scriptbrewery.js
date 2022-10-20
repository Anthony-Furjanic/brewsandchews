
var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);
var citySearch = document.getElementById('citySearch');


function getApi(){
fetch(`https://api.openbrewerydb.org/breweries?by_city=${citySearch.value}&per_page=3`)
	.then(response => response.json())
  .then(function(data){
    console.log(data)
    for(var i=0; i < data.length; i++){

      var barName = data[i].name 
      console.log(barName)
      displayBeerInfo(data.current); // AL Update- Recently added this to the for-loop, since I created a function for it below.

// create
var $li = $("<li>");
var $h1 = $("<h1>");
var $h2 = $("<h2>");
var $h3 = $("<h3>");

// modify
$h1.text(barName);
$h2.text(data[i].phone);
$h3.text(data[i].street+" "+data[i].state+" "+data[i].postal_code);

// append
$("#breweries-results ul").append($li)
$li.append($h1, $h2, $h3)

    }
  })

	.catch(err => console.error(err));
}

//AL UPDATE-

var brewInfo=document.querySelector(".brewInfo")

//Creating a function 
//-- To display the data as Name: , Location : , etc.
function displayBeerInfo(data){
  console.log(data,"from display function");

  //Creation of elements
  var card = document.createElement("div");
  card.setAttribute("class","card");

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  var cardTitle = document.createElement("h5");
  cardTitle.textContent = citySearch;
  cardTitle.setAttribute("class","card-title");

  var name =document.createElement("p");
  name.setAttribute("class", "card-text");

  var phone = document.createElement("p");
  phone.setAttribute("class", "card-text");

  var address = document.createElement("p");
  address.setAttribute("class","card-text")

  var span = document.createElement("span")

  //Injection of data
  // name.textContent = 'Name of brewery:' ;{data.name} ; 
  // phone.textContent = "Phone Number:" ;{data.phone};
  // address.textContent = "Address:" ;{data.address};

  //ERROR - ^I think I know what might be wrong. When I try to make a '$' in front of the {data.fillinblank}, it creates an error. It worked in my homework, not sure why it's not working here.

  //Append
  cardTitle.append(span)
  cardBody.append(cardTitle,name,phone,address)
  card.append(cardBody)
  brewInfo.append.card
  

}
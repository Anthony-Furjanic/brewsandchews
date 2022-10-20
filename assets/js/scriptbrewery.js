
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

// create
var $li = $("<li>");
var $h1 = $("<h1>");
var $h2 = $("<h2>");
var $h3 = $("<h3>");

// modify
$h1.text(barName);
$h2.text(data[i].phone);
$h3.text(data[i].street+" "+data[i].state+" "+data[i].postal_code);

// to do location!



// append
$("#breweries-results ul").append($li)
$li.append($h1, $h2, $h3)

    }
  })

	.catch(err => console.error(err));
}
// var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
// var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// fetch(badRequestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f18ada2c48msh78033a43062fe9fp17cd5cjsnd0092509d56d',
// 		'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/5494', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f18ada2c48msh78033a43062fe9fp17cd5cjsnd0092509d56d',
// 		'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=dog', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// var fetchButton = document.getElementById('fetch-button');

// // Get Breweries 

// function getApi() {
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f18ada2c48msh78033a43062fe9fp17cd5cjsnd0092509d56d',
// 		'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_type=micro&by_tag=patio', options)
// 	.then(response => response.json())
// 	.then(response => {
//     console.log(response);
//     console.log(response.content);
//   })
// 	.catch(err => console.error(err));
// }

var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f18ada2c48msh78033a43062fe9fp17cd5cjsnd0092509d56d',
// 		'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
// 	}
// };
function getApi(){
fetch("https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=3")
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


      // modify
$h1.text(barName);
// to do location!



      // append
$("#breweries-results ul").append($li)
$li.append($h1, $h2)

    }
  })

	.catch(err => console.error(err));
}
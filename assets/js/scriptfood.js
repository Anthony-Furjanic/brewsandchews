const API_KEY = "b7ac001729cf4bbc83648cc843576dc7";
/*const API_KEY = "0088aafe930d4033a5c614a83a670522";*/
const API_KEY = "19db81f8aeaa44ca9368c08c0050ab3d";
const API_KEY = "292fa4f8908f4c5e9f6c335c46c0daa9";
const API_KEY = "18b31ad0e807468fbe30a17793faa16b";




let userContainerEl = document.getElementById('foodSearch');
let fetchButtonEl = document.getElementById('searchButton');
//button handler which calls search food
fetchButtonEl.addEventListener("click", searchNewFood);
//to get next recipe using next button
nextButton.addEventListener("click", nextFood);
let currentItem = 0;
//to call a recipe immdiately upon loading
searchFood();

//to pull next recipe funciton

function nextFood() {
  currentItem++;
  searchFood();
}

//reset current item search type

function searchNewFood() {
  currentItem = 0;
  searchFood();
}

//attempt at creating a search box w/button to search api
function searchFood() {
  let requestURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + API_KEY + "&query=" + userContainerEl.value + "&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true";


  //API call

  fetch(requestURL).then(function (result) {
    result.json().then(function (results) {
      console.log(results);
      // variables to hold content
      let instructionsDiv = document.getElementById('instructions');
      //clear the default search option
      instructionsDiv.innerHTML = '';

      let ingredientsHeader = document.createElement('h3');
      ingredientsHeader.innerText = 'Ingredients: ';
      let instructionsHeader = document.createElement('h3');
      instructionsHeader.innerText = 'Instructions: ';

      let instructionsList = document.createElement('ol');
      let ingredientsList = document.createElement('ul');

      // Create array to hold all ingredients
      let ingredientsArray = [];

      // Loop through each instruction
      for (var i = 0; i < results.results[currentItem].analyzedInstructions[0].steps.length; i++) {
        // Loop through each ingredient
        for (var j = 0; j < results.results[currentItem].analyzedInstructions[0].steps[i].ingredients.length; j++) {
          // Grab ingredient we are at and store it in this varialbe to save some typing
          const ingredient = results.results[currentItem].analyzedInstructions[0].steps[i].ingredients[j].name;

          // indexOf returns -1 if the item is not present in the array, so we compare it to -1 to see if the ingredient should be added
          if (ingredientsArray.indexOf(ingredient) === -1) {
            // The ingredient was not present, so add it to the array
            ingredientsArray.push(ingredient);
          }
        }

        let instructionListItem = document.createElement('li');
        //to grab the current step
        instructionListItem.innerText = results.results[currentItem].analyzedInstructions[0].steps[i].step;

        instructionsList.appendChild(instructionListItem);
      }

      // Loop through each ingredient found and convert it to an html element
      for (var i = 0; i < ingredientsArray.length; i++) {
        // Create the HTML element to stick the ingredient into
        let ingredientListItem = document.createElement('li');

        // Set the element's text to that ingredient's name
        ingredientListItem.innerText = ingredientsArray[i];

        // Add this ingredient's HTML element to the ingredients list
        ingredientsList.appendChild(ingredientListItem);
      }

      //putting the elements in the proper order
      instructionsDiv.appendChild(ingredientsHeader);
      instructionsDiv.appendChild(ingredientsList);

      instructionsDiv.appendChild(instructionsHeader);
      instructionsDiv.appendChild(instructionsList);
      //pull in the title and picture of the dish
      document.getElementById("foodTitle").innerText = results.results[currentItem].title;
      document.getElementById("foodPic").innerHTML = "<img src='" + results.results[currentItem].image + "'>";
      console.log('text');
    });
  });
};

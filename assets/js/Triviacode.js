


// set of questions that random will pull from 
let question= ["What is the name of the process of making Beer?","Humans all over the world consume approximately how much beer in a year?",
"The building that is dedicated to making beer is known as what?","According to botany the study of beer is known as what?","What is the most famous style of beer?",
"Which country leads the most consumption of beer per capita?","International beer day is celebrated when?","After beer what is the second most consumable drink on the earth?",
"what is the oldest beverage in the world?","Which country has the most individual brands of Beer?"]
let answer= ["Brewing","Brewery","50 billion gallons","Zythology","Pilsner","Czech Republic","1st Day of August","Tea","Mead (A alcoholic drink that was discovered mistakenly)","Belgium"]

let generateBtn= document.querySelector("#Triviabutton")
console.log(generateBtn)







function flashquestion(){
let flashquestion= question [1];
console.log(abc123);





let submitAnswer = function() {

  let radios = document.getElementsByvar('choice');
  let val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Brewing" ) {
    alert('Answer is correct !');
  } else {
    alert('Try Again!');
  }
};

// if else statements to produce correct answer once question is shown








}



  


// Add event listener to generate button
generateBtn.addEventListener("click", flashquestion);

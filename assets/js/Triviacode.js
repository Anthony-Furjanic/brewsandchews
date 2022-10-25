// set of questions that random will pull from
const question = [
  "What is the name of the process of making Beer?",
  "Humans all over the world consume approximately how much beer in a year?",
  "The building that is dedicated to making beer is known as what?",
  "According to botany the study of beer is known as what?",
  "What is the most famous style of beer?",
  "Which country leads the most consumption of beer per capita?",
  "International beer day is celebrated when?",
  "After beer what is the second most consumable drink on the earth?",
  "What is the oldest beverage in the world?",
  "Which country has the most individual brands of Beer?",
];
const answer = [
  "Brewing",
  "Brewery",
  "50 billion gallons",
  "Zythology",
  "Pilsner",
  "Czech Republic",
  "1st Day of August",
  "Tea",
  "Mead (An alcoholic drink that was discovered mistakenly)",
  "Belgium",
];

const questionAndAnswer = [
  {
    questions: "What is the name of the process of making Beer?",
    answers: ["Beering", "Alchemy"],
    rightAns: ["Brewing"],
  },
  {
    questions:
      "Humans all over the world consume approximately how much beer in a year?",
    answers: ["337 Million Gallons", "8 billion gallons"],
    rightAns: ["50 billion gallons"],
  },
  {
    questions:
      "The building that is dedicated to making beer is known as what?",
    answers: ["Brewhouse", "Beergarden"],
    rightAns: ["Brewery"],
  },
  {
    questions: "According to botany the study of beer is known as what?",
    answers: ["Hopology", "fermentology"],
    rightAns: ["Zythology"],
  },
  {
    questions: "What is the most famous style of beer?",
    answers: ["Lager", "Stout"],
    rightAns: ["Pilsner"],
  },
  {
    questions: "Which country leads the most consumption of beer per capita?",
    answers: ["Germany", "United States"],
    rightAns: ["Czech Republic"],
  },
  {
    questions: "International beer day is celebrated when?",
    answers: ["3rd Day of Septmember", "17th Day of April"],
    rightAns: ["1st Day of August"],
  },
  {
    questions:
      "After beer what is the second most consumed drink on the earth (excluding water)?",
    answers: ["Lemonade", "Soda"],
    rightAns: ["Tea"],
  },
  {
    questions: "What is the oldest beverage in the world?",
    answers: ["Fermented fruit juice", "vodka"],
    rightAns: ["Mead (An alcoholic drink that was discovered mistakenly)"],
  },
  {
    questions: "Which country has the most individual brands of Beer?",
    answers: ["France", "Canada"],
    rightAns: ["Belgium"],
  },
];

function QuestionRetrieve() {
  const randomQuestion =
    questionAndAnswer[Math.floor(Math.random() * questionAndAnswer.length)];
  console.log(randomQuestion.questions);
  console.log(randomQuestion.answers);

  document.getElementById("questionField").innerHTML = randomQuestion.questions;
  document.getElementById("answer1").innerHTML = randomQuestion.answers[0];
  document.getElementById("answer2").innerHTML = randomQuestion.answers[1];
  document.getElementById("answer3").innerHTML = randomQuestion.rightAns[0];

  //   trivquestions = trivquestions[Math.floor(Math.random()*
  //     (trivquestions.length))];
  //     return trivquestions
  // console.log(trivquestions);
}

// Create button to submit answers
// need form tag around radio buttons
// Create function to check if answer is correct
// in function you need to a conditional
// example if question 1 is selected answer should be true

// Add event listener to generate button
Triviabutton.addEventListener("click", QuestionRetrieve);
console.log();

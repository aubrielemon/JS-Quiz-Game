onst questions = [
  {
  category: "Animals",
  question: "What animal is a mammal?",
  choices: ["Bunny","Lizard","Frog"],
  answer:"Bunny"
  },{
  category: "Holidays",
  question: "What holiday represents winter solstice?",
  choices: ["Thanksgiving","Halloween","Christmas"],
  answer:"Christmas"
  },
  {
  category: "Learning",
  question: "Where are you learning to code?",
  choices: ["freeCodeCamp","Youtube videos","Devslopes"],
  answer:"freeCodeCamp"
  },
  { 
  category: "Animals",
  question: "What is a mammal that jumps and stands upright,known to be in Australia?",
  choices: ["Monkey","Gorilla","Kangaroo"],
  answer:"Kangaroo"
  },
  {
  category: "Holidays",
  question: "What holiday is associated with turkey?",
  choices: ["Christmas","Labor Day","Thanksgiving"],
  answer:"Thanksgiving"
  }
];

const getRandomQuestion = arr => {
 for(let i = 0; i < arr.length;){
   return arr[i];
 } 
 }

const getRandomComputerChoice = choicesarr => {
  for(let i = 0; i < choicesarr.length;){
    return choicesarr[i];
  }
  }

  const getResults = (quest, cpu) => {
    if(quest.answer === cpu){
      return "The computer's choice is correct!"
    }else{
      return `The computer's choice is wrong. The correct answer is: ${quest.answer}`
    }
  }


const SayHelloAPI = async (input) => {
  if(input === "")
    {
      return "Invalid please enter you name";
    }
return retrieveData( `https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/HelloWorld/SayHello/${input}`)
};

const AskingQuestionsAPI = async (name, time) => {
  if(name === ""||time==="")
    {
      return "Invalid please complete fields";
    }
return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AskingQuestions/Asking/${name}/${time}`)
};

const ResturantPickerAPI = async (input) => {
  if(input === "")
    {
      return "Invalid please enter a category";
    }
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ResturantPicker/${input}`)
};

const Magic8BallAPI = async (input) => {
  if(input === "")
    {
      return "Invalid please ask a question";
    }
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/${input}`)
};
const AddingTwoNumbersAPI = async (num1, num2) => {
  if(isNaN(num1) || isNaN(num2) || num1 === "" || num2 === ""){
    return "Invalid please enter numbers"
  }
  return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AddingTwoNumbers/Adding/${num1}/${num2}`)
};
const ReverseItWordAPI = async (input) => {
  if(input === "" || !isNaN(input))
  {
    return "Invalid please enter a word";
  }
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ReverseItAlpha/Reversestring/${input}`)
};
const OddOrEvenAPI = async (input) => {
  if(isNaN(input)|| input === ""){
    return "Invalid please enter a number"
  }
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/OddOrEven/OddorEven/${input}`)
};
const MadlibAPI = async (
  cityName,
  favBacketballTeam,
  favFood,
  dreamCar,
  favCartoonChar,
  favVideoGame,
  famousPersonName,
  adjective,
  animeCharacter,
  animal
) => {
  const fields = [
    cityName,
    favBacketballTeam,
    favFood,
    dreamCar,
    favCartoonChar,
    favVideoGame,
    famousPersonName,
    adjective,
    animeCharacter,
    animal,
  ];
  for(let i =0;i<fields.length;i++)
  {
    if (!fields[i]||fields[i].value == "")
    {
      return "Invalid please complete the form."
    }
  }

   return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Madlib/Madlib/${cityName}/${favBacketballTeam}/${favFood}/${dreamCar}/${favCartoonChar}/${favVideoGame}/${famousPersonName}/${adjective}/${animeCharacter}/${animal}`);

};
const GreaterThanLessThanAPI = async (num1, num2) => {
  if(isNaN(num1) || isNaN(num2) || num1 === "" || num2 === ""){
    return "Invalid please enter numbers"
  }
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/GreaterThanLessThan/Comparing/${num1}/${num2}`);
};
const ReverseItNumbersAPI = async (input) => {
  if(!input||input.trim() === ""){
    return "Invalid please fill out form"
  }
  return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ReverseItNumbers/Reversenumber/${input}`);
};
const retrieveData= async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network Response was not ok');
        }

        const data = await res.text();
        return data;
      } catch (error) {
        console.error('There was an error with the fetch', error);
      }
}
const CheckInput =(input)=>{
  if(!input||input.trim() === ""){
    return "Invalid please fill out form"
  }
}
export {
  SayHelloAPI,
  AskingQuestionsAPI,
  ResturantPickerAPI,
  Magic8BallAPI,
  AddingTwoNumbersAPI,
  ReverseItNumbersAPI,
  ReverseItWordAPI,
  OddOrEvenAPI,
  MadlibAPI,
  GreaterThanLessThanAPI,
};

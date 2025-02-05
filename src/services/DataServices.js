
const SayHelloAPI = async (input) => {
return retrieveData( `https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/HelloWorld/SayHello/${input}`)
};

const AskingQuestionsAPI = async (name, time) => {
return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AskingQuestions/Asking/${name}/${time}`)
};

const ResturantPickerAPI = async (input) => {
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ResturantPicker/${input}`)
};

const Magic8BallAPI = async (input) => {
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/${input}`)
};
const AddingTwoNumbersAPI = async (num1, num2) => {
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AddingTwoNumbers/Adding/${num1}/${num2}`)
};
const ReverseItWordAPI = async (input) => {
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ReverseItAlpha/Reversestring/${input}`)
};
const OddOrEvenAPI = async (input) => {
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
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Madlib/Madlib/${cityName}/${favBacketballTeam}/${favFood}/${dreamCar}/${favCartoonChar}/${favVideoGame}/${famousPersonName}/${adjective}/${animeCharacter}/${animal}`);

};
const GreaterThanLessThanAPI = async (num1, num2) => {
 return retrieveData(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/GreaterThanLessThan/Comparing/${num1}/${num2}`);
};
const ReverseItNumbersAPI = async (input) => {
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

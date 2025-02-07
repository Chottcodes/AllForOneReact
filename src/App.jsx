import "./App.css";
import sayHelloImage from "./assets/hello.png";
import AskingQuestionsImage from "./assets/question.png";
import RestaurantPickerImage from "./assets/restaurant.png";
import Magic8BallImage from "./assets/8-ball.png";
import AddingNumbersImage from "./assets/maths.png";
import ReverseTheWordImage from "./assets/exchange.png";
import OddorEvenImage from "./assets/balance.png";
import MadlibImage from "./assets/paper.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";




function App() {


     useEffect(() => {
        document.body.style.backgroundImage = "url('../src/assets/spacepicture.jpg')";
        document.body.className ="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      }, []);
  return (
    <>
     <header>
      <div className="flex justify-center items-center h-20 tracking-[0.5em] my-5">
        <h1 className="text-white text-[30px] lg:text-[70px]">All For One</h1>
      </div>
    </header>
    <hr className="w-[90%] lg:w-[50%] m-auto" />
   
    <div
      className="buttons-container grid grid-rows-10 lg:grid-rows-4 lg:grid-cols-3 lg:gap-10 lg:h-screen h-[90%] place-items-center gap-5 my-5"
    >
      <Link className="w-[100%] h-[100%] flex justify-center" to="/SayHello"><button
        id="sayHello"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img src={sayHelloImage} alt="hand waving" className="w-14 invert" />
        <p className="text-2xl text-white">Say Hello</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/AskingQuestions"><button
        id="askingQuestions"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img
          src={AskingQuestionsImage}
          alt="question mark"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Asking Questions</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/RestaurantPicker"><button
        id="restaurantPicker"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img
          src={RestaurantPickerImage}
          alt="plates and knifes"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Restaurant Picker</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/Magic8Ball"><button
        id="magic8Ball"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img
          src={Magic8BallImage}
          alt="magic 8 ball"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Magic 8 Ball</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/AddingNumbers"><button
        id="addingNumbers"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img src={AddingNumbersImage} alt="math symbols" className="w-14 invert" />
        <p className="text-2xl text-white">Adding Numbers</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/ReverseTheWord"> <button
        id="reverseWord"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img
          src={ReverseTheWordImage}
          alt="reverse symbol"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Reverse the Word</p>
      </button></Link>
      <Link className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black lg:col-start-2 lg:row-start-4 lg:w-[100%] " to="/ReverseTheNumber"><button
        id="reverseTheNumber"
        className="flex flex-col items-center gap-3"
      >
        <img
          src={ReverseTheWordImage}
          alt="reverse symbol"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Reverse the Number</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/OddorEven"><button
        id="OddOrEven"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img src={OddorEvenImage} alt="Scale" className="w-14 invert" />
        <p className="text-2xl text-white">Odd or Even</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/Madlib"><button
        id="madlib"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img src={MadlibImage} alt="NewsPaper" className="w-14 invert" />
        <p className="text-2xl text-white">Madlib</p>
      </button></Link>
      <Link className="w-[100%] h-[100%] flex justify-center" to="/GreaterThanLessThan"><button
        id="greaterThan"
        className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black"
      >
        <img
          src={OddorEvenImage}
          alt="Scale symbol"
          className="w-14 invert"
        />
        <p className="text-2xl text-white">Greater than Less Than</p>
      </button></Link>
    </div>
       
      
    </>
  );

}

export default App;

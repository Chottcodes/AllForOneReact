import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddingTwoNumbersAPI } from "../services/DataServices";

const AddingNumbers = () => {
  const [userInput1, setuserInput1] = useState("");
  const [userInput2, setuserInput2] = useState("");
  const [ApiText, setApiText] = useState("");
  const submitClick = async () => {
    setApiText(await AddingTwoNumbersAPI(userInput1, userInput2));
  };
  const resetClick = () => {
    setApiText("");
  };
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('/assets/JamesWebbGalexy.jpg')";
    document.body.className =
      "h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
    setApiText("Enter 2 number I can add");
  }, []);

  return (
    <>
      <div className="bg-black w-[80%] h-[20%] lg:w-[50%] lg:mt-[5%] lg:text-3xl m-auto my-7 rounded-2xl bg-opacity-70 outline outline-white outline-1 text-white flex justify-center items-center text-2xl">
        <h1>Enter 2 number I can add</h1>
      </div>
      <div className="w-[90%] h-[20%] text-2xl lg:w-[40%] lg:h-[20%] outline outline-white bg-black rounded-3xl bg-opacity-75 m-auto flex justify-evenly items-center">
        <input
          type="text"
          placeholder="num 1"
          id="numOneInput"
          onChange={(e) => setuserInput1(e.target.value)}
          className="w-[30%] h-[40%] bg-black outline outline-white bg-opacity-80 text-center text-white"
        />
        <img
          src="/assets/plus.png"
          alt="plus symbol"
          className="invert w-[10%]"
        />
        <input
          type="text"
          placeholder="num 2"
          id="numTwoInput"
          onChange={(e) => setuserInput2(e.target.value)}
          className="w-[30%] h-[40%] bg-black outline outline-white bg-opacity-70 text-center text-white"
        />
      </div>

      <div className="w-[90%] h-[15%] my-7 lg:w-[40%] lg:h-[15%] text-2xl text-white outline outline-white outline-1 bg-black rounded-3xl bg-opacity-75 m-auto flex justify-center items-center">
        <h1 id="outputBox" className="text-center">{ApiText}</h1>
      </div>
      <div className="buttonContainer bg-opacity-70 w-[40%] h-52 text-3xl flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-5 lg:items-center lg:flex-row lg:my-14 m-auto my-7 rounded-2xl lg:justify-evenly">
        <button
          id="submitBTN"
          onClick={submitClick}
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
        >
          Submit
        </button>
        <Link
          className="bg-black bg-opacity-65 outline flex justify-center items-center outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          to="/"
        >
          <button className="" id="homeBTN">
            Home
          </button>
        </Link>
        <button
          className="bg-black bg-opacity-65 outline outline-white text-3xl rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="resetButton"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default AddingNumbers;

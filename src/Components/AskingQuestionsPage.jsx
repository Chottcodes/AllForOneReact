import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AskingQuestionsAPI } from "../services/DataServices";

const AskingQuestions = () => {
  const [userInputOne, setuserInputOne] = useState("");
  const [userInputTwo, setuserInputTwo] = useState("");
  const [ApiText, setApiText] = useState("");
  const clickSubmit = async () => {
    setApiText(await AskingQuestionsAPI(userInputOne, userInputTwo));
  };
  const resetClick = () => {
    setApiText("Please enter your name and the time you woke up.");
    setuserInputOne("");
    setuserInputTwo("");
  };

  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/blackhole.jpg')";
    document.body.className =
      "h-screen bg-cover overflow-hidden bg-center bg-no-repeat";
    setApiText("Please enter your name and the time you woke up.");
  }, []);
  useEffect(() => {
    console.log(userInputOne);
    console.log(userInputTwo);
  }, [userInputOne, userInputTwo]);
  return (
    <>
      <div className="outputContainer bg-black bg-opacity-70 w-[80%] text-2xl h-32 lg:w-[60%] lg:h-[20%] lg:text-4xl m-auto my-10 rounded-2xl text-white flex justify-center items-center">
        <h1 className="text-center" id="outputBox">
          {ApiText}
        </h1>
      </div>

      <div className="bg-black bg-opacity-70 w-[80%] h-24 lg:w-[40%] lg:h-[20%] m-auto rounded-2xl flex justify-center">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setuserInputOne(e.target.value)}
          value={userInputOne}
          className="bg-black lg:text-4xl bg-opacity-80 outline outline-white outline-3 w-[100%] text-white rounded-2xl font-sans text-2xl text-center"
        />
      </div>
      <div className="bg-black bg-opacity-70 w-[80%] h-24 lg:w-[40%] lg:h-[20%] m-auto my-5 rounded-2xl flex justify-center">
        <input
          type="text"
          placeholder="Wake-Up Time"
          onChange={(e1) => setuserInputTwo(e1.target.value)}
          value={userInputTwo}
          id="wakeUpInput"
          className="bg-black lg:text-4xl bg-opacity-80 outline outline-white outline-3 w-[100%] text-white rounded-2xl font-sans text-2xl text-center"
        />
      </div>

      <div className="buttonContainer bg-opacity-70 text-3xl w-[40%] h-56 flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-5 lg:items-center lg:flex-row lg:my-14 m-auto my-10 rounded-2xl lg:justify-evenly">
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="submitBTN"
          onClick={clickSubmit}
        >
          Submit
        </button>
        <Link
          className="bg-black bg-opacity-65 flex justify-center items-center outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          to="/"
        >
          <button className="" id="homeBTN">
            Home
          </button>
        </Link>
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:block lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="resetButton"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default AskingQuestions;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Magic8BallAPI } from "../services/DataServices";
const Magic8Ball = () => {
  const [userInput, setuserInput] = useState("");
  const [ApiText, setApiText] = useState("");

  const submitClick = async () => {
    setApiText(await Magic8BallAPI(userInput));
  };
  const resetClick = () => {
    setApiText("Ask me a question");
    setuserInput("");
  };
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/Jupiter.jpg')";
    document.body.className =
      "h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
    setApiText("Ask me a question");
  }, []);
  return (
    <>
    <div className="h-[90%] pt-2">
      <div className="prompt-container lg:h-[20%] bg-black flex justify-center lg:my-24 items-center text-white text-2xl font-sans bg-opacity-70 h-[15%] w-[70%] lg:w-[35%] m-auto mt-20 my-6 rounded-3xl outline outline-white outline-1">
        <h1 id="outputBox">{ApiText}</h1>
      </div>
      <div className="bg-opacity-70 h-[15%] w-[70%] lg:h-[20%]  m-auto my-7 rounded-3xl flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setuserInput(e.target.value)}
          value={userInput}
          className="bg-black bg-opacity-70 h-[100%] w-[100%] lg:w-[60%] rounded-3xl outline outline-white outline-2 text-white text-center text-3xl"
          id="inputBox"
        />
      </div>

      <div className="buttons h-[40%] w-[50%] gap-5 m-auto flex flex-col lg:flex-row lg:items-center">
        <button
          className="bg-black bg-opacity-70 text-2xl text-white rounded-2xl h-[30%] w-[100%] m-auto outline outline-white outline-2 hover:bg-black lg:w-[30%]"
          id="submitBTN"
          onClick={submitClick}
        >
          Submit
        </button>
        <Link
          className="bg-black flex items-center justify-center bg-opacity-70 text-2xl text-white rounded-2xl h-[30%] w-[100%] m-auto outline outline-white outline-2 hover:bg-black lg:w-[30%]"
          to="/"
        >
          <button className="" id="homeBTN">
            Home
          </button>
        </Link>
        <button
          className="bg-black bg-opacity-65 outline outline-white text-2xl rounded-2xl h-[30%] w-[100%] lg:block lg:text-3xl lg:w-[30%] lg:h-[30%] text-white hover:outline-white hover:bg-black"
          id="resetButton"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
      </div>
    </>
  );
};
export default Magic8Ball;

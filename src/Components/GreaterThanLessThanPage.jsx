import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GreaterThanLessThanAPI } from "../services/DataServices";

const GreaterThan = () => {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [ApiText, setApiText] = useState("");
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/GreenPlanet.jpg')";
    document.body.className =
      "h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
    setApiText("Please enter two number and I will tell you which is greater.");
  }, []);
  const submitClick = async () => {
    setApiText(await GreaterThanLessThanAPI(input1, input2));
  };
  const resetClick = () => {
    setApiText("Please enter two number and I will tell you which is greater.");
    setinput1("");
    setinput2("");
  };
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
          placeholder="Number 1"
          id="Number1Input"
          onChange={(e) => setinput1(e.target.value)}
          value={input1}
          className="bg-black lg:text-4xl bg-opacity-80 outline outline-white outline-3 w-[100%] text-white rounded-2xl font-sans text-2xl text-center"
        />
      </div>
      <div className="bg-black bg-opacity-70 w-[80%] h-24 lg:w-[40%] lg:h-[20%] m-auto my-5 rounded-2xl flex justify-center">
        <input
          type="text"
          placeholder="Number 2"
          onChange={(e) => setinput2(e.target.value)}
          value={input2}
          id="Number2Input"
          className="bg-black lg:text-4xl bg-opacity-80 outline outline-white outline-3 w-[100%] text-white rounded-2xl font-sans text-2xl text-center"
        />
      </div>

      <div className="buttonContainer bg-opacity-70 text-3xl w-[40%] h-56 flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-5 lg:items-center lg:flex-row lg:my-14 m-auto my-10 rounded-2xl lg:justify-evenly">
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="submitBTN"
          onClick={submitClick}
        >
          Submit
        </button>
        <Link
          className="bg-black bg-opacity-65 flex justify-center items-center outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          to="/ "
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
export default GreaterThan;

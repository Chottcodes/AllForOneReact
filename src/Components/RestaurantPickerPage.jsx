import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResturantPickerAPI } from "../services/DataServices";
const ResPicker = () => {
  const [userInput, setuserInput] = useState("");
  const [ApiText, setApiText] = useState("");
  const [empty, setempty] = useState("");

  const submitClick = async () => {
    setApiText(await ResturantPickerAPI(userInput));
  };

  const resetClick = () => {
    setApiText("Select a category");
    setempty("");
    setuserInput("");
  };
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/Nebula.jpg')";
    document.body.className =
      "h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
    setApiText("Select a category");
  }, []);

  return (
    <>
      <div className="w-72 h-36 bg-black lg:w-[30%] lg:my-[5%] m-auto my-4 mt-10 rounded-3xl text-white flex justify-center items-center text-3xl bg-opacity-80 outline outline-white outline-2">
        <h1 id="outputBox" className="text-center">{ApiText}</h1>
      </div>

      <div className=" h-[20%] w-[70%] lg:w-[50%] m-auto text-white">
        <input
          type="text"
          placeholder="Mexican,Indian,Italian"
          onChange={(e) => setuserInput(e.target.value)}
          value={userInput}
          id="inputBox"
          className="h-[100%] w-[100%] bg-black bg-opacity-80 outline outline-white outline-4 text-center text-3xl rounded-3xl"
        />
      </div>

      <div className="buttonContainer bg-opacity-70 text-3xl w-[70%] h-72 flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-5 lg:items-center lg:flex-row lg:my-24  m-auto my-10 rounded-2xl lg:justify-evenly">
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="submitBTN"
          onClick={submitClick}
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
export default ResPicker;

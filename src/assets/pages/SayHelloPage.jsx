import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SayHelloAPI } from "../../services/DataServices";

const SayHello = () => {
  const [userInput, setuserInput] = useState("");
  const [ApiText, setApiText] = useState("");

  const ClickTest = async () => {
    setApiText(await SayHelloAPI(userInput));
    console.log(ApiText);
  };
  const ResetClick = () => {
    setApiText("Please enter your name");
  };
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('/src/assets/wavingspaceman.jpg')";
    document.body.className =
      "h-screen bg-cover overflow-hidden bg-center bg-no-repeat";
  }, []);
  useEffect(() => {
    console.log("Changes are being made");
    setApiText("Please enter you name");
  }, [userInput]);

  return (
    <>
      <div className="outputContainer bg-black bg-opacity-70 w-[80%] h-32 text-2xl lg:w-[60%] lg:h-[20%] lg:text-4xl m-auto my-10 rounded-2xl text-white flex justify-center items-center">
        <h1 id="outputBox">{ApiText}</h1>
      </div>

      <div className="bg-black bg-opacity-70 w-[80%] h-32 lg:w-[50%] lg:h-[25%] m-auto rounded-2xl flex justify-center">
        <input
          id="inputField"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => setuserInput(event.target.value)}
          className="bg-black lg:text-4xl bg-opacity-80 outline outline-white outline-3 w-[100%] text-white rounded-2xl font-sans text-2xl text-center"
        />
      </div>

      <div className="buttonContainer bg-opacity-70 w-[60%] h-64 text-3xl flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-12 lg:items-center lg:flex-row lg:my-20 m-auto my-16 rounded-2xl lg:justify-evenly">
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="submitBTN"
          onClick={ClickTest}
        >
          Submit
        </button>
        <Link
          className="bg-black bg-opacity-65 flex justify-center outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black "
          to="/"
        >
          <button className="" id="homeBTN">
            Home
          </button>
        </Link>
        <button
          className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:block lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
          id="resetButton"
          onClick={ResetClick}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default SayHello;

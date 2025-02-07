import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MadlibAPI } from "../services/DataServices";

const Madlib = () => {
  const [cityInput, setcityInput] = useState("");
  const [animeInput, setanimeInput] = useState("");
  const [adjectiveInput, setadjectiveInput] = useState("");
  const [foodInput, setfoodInput] = useState("");
  const [videoGamesInput, setvideoGamesInput] = useState("");
  const [famousInput, setfamousInput] = useState("");
  const [animalInput, setanimalInput] = useState("");
  const [cartoonInput, setcartoonInput] = useState("");
  const [dreamCarInput, setdreamCarInput] = useState("");
  const [basketballInput, setbasketballInput] = useState("");
  const [ApiText, setApiText] = useState("");
  const SetInputArr = [
    setcityInput,
    setanimalInput,
    setadjectiveInput,
    setfoodInput,
    setvideoGamesInput,
    setfamousInput,
    setanimeInput,
    setcartoonInput,
    setdreamCarInput,
    setbasketballInput,
  ];
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/frozenplanet.jpg')";
    document.body.className =
      "min-h-screen fadeIn bg-cover bg-center bg-no-repeat bg-fixed";
  }, []);
  const submitButton = async () => {
    setApiText(
      await MadlibAPI(
        cityInput,
        basketballInput,
        foodInput,
        dreamCarInput,
        cartoonInput,
        videoGamesInput,
        famousInput,
        adjectiveInput,
        animeInput,
        animalInput
      )
    );
  };
  const resetClick = () => {
    SetInputArr.forEach((i) => {
      i("");
    });
    setApiText("");
  };
  return (
    <div className="h-screen">
      <div className="bg-black w-[80%] h-[15%] lg:w-[50%] lg:h-[20%] m-auto my-10 rounded-3xl bg-opacity-80 outline outline-white outline-1 text-white flex justify-center items-center text-3xl">
        <h1>Welcome to Madlib</h1>
      </div>
      <div className="w-[90%] h-[60%] lg:w-[70%] lg:h-[20%] m-auto grid grid-cols-2 grid-rows-5 gap-4 lg:grid-cols-5 lg:grid-rows-2">
        <input
          type="text"
          id="cityInput"
          placeholder="City Name"
          onChange={(e) => setcityInput(e.target.value)}
          value={cityInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="animeInput"
          placeholder="Anime Character"
          onChange={(e) => setanimeInput(e.target.value)}
          value={animeInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="adjectiveInput"
          placeholder="Adjective"
          onChange={(e) => setadjectiveInput(e.target.value)}
          value={adjectiveInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="foodInput"
          placeholder="Food"
          onChange={(e) => setfoodInput(e.target.value)}
          value={foodInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="gameInput"
          placeholder="Video Game"
          onChange={(e) => setvideoGamesInput(e.target.value)}
          value={videoGamesInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="famousInput"
          placeholder="Famous Person"
          onChange={(e) => setfamousInput(e.target.value)}
          value={famousInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="animalInput"
          placeholder="Animal"
          onChange={(e) => setanimalInput(e.target.value)}
          value={animalInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="cartoonInput"
          placeholder="Cartoon Character"
          onChange={(e) => setcartoonInput(e.target.value)}
          value={cartoonInput}
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="carInput"
          onChange={(e) => setdreamCarInput(e.target.value)}
          value={dreamCarInput}
          placeholder="Dream Car"
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
        <input
          type="text"
          id="teamInput"
          onChange={(e) => setbasketballInput(e.target.value)}
          value={basketballInput}
          placeholder="Basketball Team"
          className="bg-black bg-opacity-80 outline outline-white outline-1 rounded-2xl text-white text-center text-2xl"
        />
      </div>
      <div className="bg-black w-[80%] h-[40%] lg:h-[20%] lg:w-[60%] m-auto my-10 rounded-3xl bg-opacity-80 outline outline-white outline-1 text-white text-2xl break-words overflow-auto">
        <h1 className="p-7 indent-8" id="outputBox">
          {ApiText}
        </h1>
      </div>

      <div className="buttons h-[40%] pb-4 w-[40%] gap-2 m-auto flex flex-col mb-14 lg:flex-row lg:h-[10%] lg:w-[70%] lg:mb-[30%]">
        <button
          className="bg-black bg-opacity-70 text-white rounded-2xl h-[25%] w-[100%] lg:py-4 m-auto outline outline-white outline-2 hover:bg-black lg:w-[30%] lg:h-[100%]"
          id="SubmitBTN"
          onClick={submitButton}
        >
          Submit
        </button>
        <Link
          className="bg-black bg-opacity-70 flex justify-center items-center text-white rounded-2xl h-[25%] w-[100%] lg:py-4 m-auto outline outline-white outline-2 hover:bg-black lg:w-[30%] lg:h-[100%]"
          to="/"
        >
          <button id="homeBTN">Home</button>
        </Link>
        <button
          className="bg-black bg-opacity-70 text-white rounded-2xl h-[25%] w-[100%] lg:py-4 m-auto outline outline-white outline-2 hover:bg-black lg:w-[30%] lg:h-[100%]"
          id="resetBTN"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Madlib;

import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddingNumbers = () => {
    useEffect(() => {
                    document.body.style.backgroundImage = "url('/src/assets/JamesWebbGalexy.jpg')";
                    document.body.className ="h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
                  }, []);

    return (
        <>
        <div
      className="bg-black w-[80%] h-[20%] lg:w-[50%] lg:mt-[5%] lg:text-3xl m-auto my-7 rounded-2xl bg-opacity-70 outline outline-white outline-1 text-white flex justify-center items-center text-2xl"
    >
      <h1>Give me 2 numbers I can add</h1>
    </div>
    <div
      className="w-[90%] h-[20%] text-2xl lg:w-[40%] lg:h-[20%] outline outline-white bg-black rounded-3xl bg-opacity-75 m-auto flex justify-evenly items-center"
    >
      <input
        type="text"
        placeholder="num 1"
        id="numOneInput"
        className="w-[30%] h-[40%] bg-black outline outline-white bg-opacity-80 text-center text-white"
      />
      <img src="/src/assets/plus.png" alt="plus symbol" className="invert w-[10%]" />
      <input
        type="text"
        placeholder="num 2"
        id="numTwoInput"
        className="w-[30%] h-[40%] bg-black outline outline-white bg-opacity-70 text-center text-white"
      />
    </div>
    
    <div
      className="w-[90%] h-[15%] my-7 lg:w-[40%] lg:h-[15%] text-2xl text-white outline outline-white outline-1 bg-black rounded-3xl bg-opacity-75 m-auto flex justify-center items-center"
    >
      <h1 id="outputBox"></h1>
    </div>
    <div
      className="buttonContainer bg-opacity-70 w-[40%] h-52 text-3xl flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-5 lg:items-center lg:flex-row lg:my-14 m-auto my-7 rounded-2xl lg:justify-evenly"
    >
      <button
        id="submitBTN"
        className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
      >
        Submit
      </button>
      <Link className="bg-black bg-opacity-65 outline flex justify-center items-center outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black" to="/"><button
        className=""
      id="homeBTN"
        >
        Home
      </button></Link>
      <button
        className="bg-black bg-opacity-65 outline outline-white text-3xl rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
        id="resetButton"
      >
        Reset
      </button>
    </div>
        </>
    )
}
export default AddingNumbers


import { useEffect } from "react";
import { Link } from "react-router-dom";

const OddorEven = () => {
    useEffect(() => {
            document.body.style.backgroundImage = "url('/src/assets/Jupiter.jpg')";
            document.body.className ="h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
          }, []);
    return (
        <>
        <div
      className="w-[80%] h-[20%] text-2xl text-center lg:mt-[5%] lg:w-[50%] bg-black m-auto rounded-3xl outline font-sans text-white flex justify-center items-center outline-white outline-1 my-9 bg-opacity-70"
    >
      <h1 >Enter a number and I will tell you if its odd or even</h1>
    </div>
    <div
      className="w-[80%] h-[20%] lg:w-[30%] lg:h-[15%] bg-black m-auto rounded-3xl outline outline-white outline-2 bg-opacity-70"
    >
      <input
        type="text"
        placeholder="Enter A Number"
        className="w-[100%] h-[100%] bg-black rounded-3xl outline text-white text-2xl text-center outline-white outline-2 bg-opacity-70"
        id="inputBox"
        />
    </div>
    <div
      className="w-[80%] h-[10%] lg:w-[20%] lg:h-[15%] text-3xl bg-black m-auto rounded-3xl outline font-sans text-white flex justify-center items-center outline-white outline-1 my-9 bg-opacity-70"
    >
      <h1 id="outputBox"></h1>
    </div>
    <div
      className="buttonContainer bg-opacity-70 w-[60%] h-52 flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-12 lg:items-center lg:flex-row lg:my-14 m-auto my-7 rounded-2xl lg:justify-evenly"
    >
      <button
        className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
        id="SubmitBTN"
        >
        Submit
      </button>
      <Link className="bg-black bg-opacity-65 flex justify-center items-center outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black" to="/"><button
        className=""
      id="homeBTN"
        >
        Home
      </button></Link>
      <button
        className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:block lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
        id="resetBTN"
        >
        Reset
      </button>
    </div>
        </>
    )
}
export default OddorEven
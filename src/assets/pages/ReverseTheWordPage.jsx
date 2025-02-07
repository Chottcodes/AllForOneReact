import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReverseItWordAPI } from "../../services/DataServices";
const ReverseWord = () => {

  const [input1,setinput1]=useState('');
  const [ApiText,setApiText]=useState('')
  
  const submitClick =async () => {
    setApiText(await ReverseItWordAPI(input1))
  }
  const resetClick = () => {
    setApiText("Please enter a word for me to reverse");
    setinput1("")
  }

    useEffect(() => {
                document.body.style.backgroundImage = "url('/src/assets/Eartth.jpg')";
                document.body.className ="h-screen fadeIn bg-cover overflow-hidden bg-center bg-no-repeat";
                setApiText("Enter a word for me to reverse");
              }, []);


    return (
        <>
    <div
      className="w-[80%] h-[20%] lg:w-[50%] bg-black text-2xl m-auto rounded-3xl lg:mt-[10%] outline font-sans text-white flex justify-center items-center outline-white outline-1 my-9 bg-opacity-70"
        
      >
      <h1 id="outputText">{ApiText}</h1>
    </div>
    <div
      className="w-[80%] h-[20%] lg:w-[50%] bg-black m-auto rounded-3xl outline outline-white outline-2 bg-opacity-70"
    >
      <input
        type="text"
        placeholder="Enter a Word"
        id="inputBox"
        onChange={(e) => setinput1(e.target.value)}
        value={input1}
        className="w-[100%] h-[100%] bg-black rounded-3xl outline text-white text-2xl text-center outline-white outline-2 bg-opacity-70"
      />
    </div>
    <div
      className="buttonContainer bg-opacity-70 w-[60%] h-56 text-3xl flex flex-col gap-5 lg:h-20 lg:w-[50%] lg:gap-12 lg:items-center lg:flex-row lg:my-14 m-auto my-7 rounded-2xl lg:justify-evenly"
    >
      <button
        className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[50%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
      id="submitBTN"
      onClick={submitClick}
        >
        Submit
      </button>
      <Link className="bg-black bg-opacity-65 flex justify-center items-center outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[50%] lg:h-[90%] text-white hover:outline-white hover:bg-black" to="/"><button
        className=""
        id="homeBTN"
        >
        Home
      </button></Link>
      <button
        className="bg-black bg-opacity-65 outline outline-white text-3xl rounded-2xl h-[100%] w-[100%] lg:block lg:text-3xl lg:w-[50%] lg:h-[90%] text-white hover:outline-white hover:bg-black"
        id="resetButton"
        onClick={resetClick}
      >
        Reset
      </button>
    </div>
        </>
    )
}
export default ReverseWord
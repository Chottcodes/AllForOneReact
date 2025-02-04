import { useEffect } from "react";
import ComputerOutPutComponent from "../Components/ComputerOutputComponent";
import HomeButton from "../Components/HomeButtonComponent";
import HomePage from "./HomePage";

const SayHello = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/src/assets/wavingspaceman.jpg')";
  }, []);

  return (
    <>
    <div className="">
     <ComputerOutPutComponent StartingText={'Please Enter Your Name'}/>
    </div>

    <div className="">
        <HomeButton to="/"/>
    </div>
    </>
  );
};

export default SayHello;
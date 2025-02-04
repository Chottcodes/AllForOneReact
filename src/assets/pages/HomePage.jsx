import PageTitle from "../Components/PageTitle";
import ChallengeButtons from "../Components/Buttons";
import sayHelloImage from "../hello.png";
import AskingQuestionsImage from "../question.png";
import RestaurantPickerImage from "../restaurant.png";
import Magic8BallImage from "../8-ball.png";
import AddingNumbersImage from "../maths.png";
import ReverseTheWordImage from "../exchange.png";
import OddorEvenImage from "../balance.png";
import MadlibImage from "../paper.png";
import { useEffect } from "react";

const HomePage = () => {
     useEffect(() => {
        document.body.style.backgroundImage = "url('../src/assets/spacepicture.jpg')";
      }, []);
  return (
    <>
      <PageTitle Title="All For One" />
      <div className="flex flex-col justify-center items-center gap-4 mt-5  m-auto">
        <ChallengeButtons
          image={sayHelloImage}
          challenge="Say Hello"
          to="/SayHello"
        />
        <ChallengeButtons
          image={AskingQuestionsImage}
          challenge="Asking Questions"
        />
        <ChallengeButtons
          image={RestaurantPickerImage}
          challenge="Restaurant Picker"
        />
        <ChallengeButtons image={Magic8BallImage} challenge="Magic 8 Ball" />
        <ChallengeButtons
          image={AddingNumbersImage}
          challenge="Adding Numbers"
        />
        <ChallengeButtons
          image={ReverseTheWordImage}
          challenge="Reverse the Word"
        />
        <ChallengeButtons
          image={ReverseTheWordImage}
          challenge="Reverse the Number"
        />
        <ChallengeButtons image={OddorEvenImage} challenge="Odd or Even" />
        <ChallengeButtons image={MadlibImage} challenge="Madlib" />
        <ChallengeButtons
          image={OddorEvenImage}
          challenge="Greater Than Less Than"
        />
      </div>
    </>
  );
};
export default HomePage;
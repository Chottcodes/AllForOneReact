import { Result } from "postcss";
import { Link } from "react-router-dom";
const ChallengeButtons = ({ image, challenge, to }) => {
  return (
    
    
      <button className="bg-white bg-opacity-20 rounded-2xl h-28 lg:h-40 outline outline-white outline-1 w-[60%] flex flex-col justify-center items-center gap-2 hover:bg-black">
      <Link to={to} className="w-[100%] flex flex-col justify-center items-center">
        <img src={image} alt="" className="w-14 invert" />
        <p className="text-2xl text-white">{challenge}</p>
        </Link>
      </button>
  );
};

export default ChallengeButtons;


import { Link } from "react-router-dom";
const HomeButton = ({to}) => {
    return (
        <button className="bg-black bg-opacity-65 outline outline-white rounded-2xl h-[100%] w-[100%] lg:text-3xl lg:w-[80%] lg:h-[90%] text-white hover:outline-white hover:bg-black">
            <Link to={to}>Home</Link>
        </button>
    );
};
export default HomeButton;
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//All of my pages imports
import HomePage from "./assets/pages/HomePage";
import SayHelloPage from "./assets/pages/SayHelloPage";
import AskingQuestionsPage from "./assets/pages/AskingQuestionsPage";
import RestaurantPickerPage from "./assets/pages/RestaurantPickerPage";
import Magic8BallPage from "./assets/pages/Magic8BallPage";
import AddingNumbersPage from "./assets/pages/AddingNumbersPage";
import ReverseTheWordPage from "./assets/pages/ReverseTheWordPage";
import ReverseTheNumberPage from "./assets/pages/ReverseTheNumberPage";
import OddorEvenPage from "./assets/pages/OddOrEvenPage";
import MadlibPage from "./assets/pages/MadlibPage";
import GreaterThanLessThanPage from "./assets/pages/GreaterThanLessThanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SayHello" element={<SayHelloPage />} />
        <Route path="/AskingQuestions" element={<AskingQuestionsPage />} />
        <Route path="/RestaurantPicker" element={<RestaurantPickerPage />} />
        <Route path="/Magic8Ball" element={<Magic8BallPage />} />
        <Route path="/AddingNumbers" element={<AddingNumbersPage />} />
        <Route path="/ReverseTheWord" element={<ReverseTheWordPage />} />
        <Route path="/ReverseTheNumber" element={<ReverseTheNumberPage />} />
        <Route path="/OddorEven" element={<OddorEvenPage />} />
        <Route path="/Madlib" element={<MadlibPage />} />
        <Route
          path="/GreaterThanLessThan"
          element={<GreaterThanLessThanPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

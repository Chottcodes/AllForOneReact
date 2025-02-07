import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//All of my pages imports
import SayHelloPage from "./Components/SayHelloPage.jsx"
import AskingQuestionsPage from "./Components/AskingQuestionsPage.jsx";
import RestaurantPickerPage from "./Components/RestaurantPickerPage.jsx";
import Magic8BallPage from "./Components/Magic8BallPage.jsx";
import AddingNumbersPage from "./Components/AddingNumbersPage.jsx";
import ReverseTheWordPage from "./Components/ReverseTheWordPage.jsx";
import ReverseTheNumberPage from "./Components/ReverseTheNumberPage.jsx";
import OddorEvenPage from "./Components/OddOrEvenPage.jsx";
import MadlibPage from "./Components/MadlibPage.jsx";
import GreaterThanLessThanPage from "./Components/GreaterThanLessThanPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
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
  </StrictMode>
);

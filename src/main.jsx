import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

//All of my pages imports
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

createRoot(document.getElementById('root')).render(
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
  </StrictMode>,
)

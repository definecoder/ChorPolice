import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing_page/LandingPage";
import HomePage from "../pages/home_page/HomePage";
import AIPage from "../pages/ai_page/AIPage";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;

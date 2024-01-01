import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing_page/LandingPage";
import HomePage from "../pages/home_page/HomePage";
import AIPage from "../pages/ai_page/AIPage";
import Friend_page from "../pages/friends_page/Friend_page";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/room" element={<Friend_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;

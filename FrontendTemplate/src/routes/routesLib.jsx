import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing_page/LandingPage";
import HomePage from "../pages/home_page/HomePage";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;

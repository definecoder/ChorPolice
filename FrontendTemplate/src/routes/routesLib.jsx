import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing_page/LandingPage";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;

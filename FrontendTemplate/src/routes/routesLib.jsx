import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing_page/LandingPage";
import HomePage from "../pages/home_page/HomePage";
import AIPage from "../pages/ai_page/AIPage";
import Friend_page from "../pages/friends_page/Friend_page";
import FriendsPage from "../pages/friends_page/FriendsPage";
import Multiplayer from "../pages/multiplayer_page/Multiplayer";
import Lobby from "../pages/multiplayer_page/Lobby";
import FriensGame from "../pages/friends_page/FriendsGame";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/room" element={<FriendsPage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/multiplayer" element={<FriensGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;

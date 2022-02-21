import React, { useState } from "react";
import "./App.css";
import Navbar from "./Constants/Navbar";
import Hero from "./Constants/Hero/Hero";
import { useHealthCheck } from "./Hooks/HealthCheck";
import { HeroStateType, pageState } from "./Common/Types";
import GetRouter from "./Constants/GetRouter";
import { curState } from "./Constants/GetRouter";
function App() {
  useHealthCheck();
  const pages: curState[] = ["tasks", "about", "join"];
  const [heroState, setHeroState] = useState<HeroStateType>(pageState());
  return (
    <div className="App">
      <Navbar setHeroState={setHeroState} />
      <Hero />
      {pages.map((page, index) => (
        <GetRouter cur={page} key={index} heroState={heroState} />
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./Constants/Navbar";
import Hero from "./Constants/Hero/Hero";
import { useHealthCheck } from "./Hooks/HealthCheck";
import { HeroStateType, pageState } from "./Common/Types";
import GetRouter from "./Constants/GetRouter";
import { curState } from "./Constants/GetRouter";
import { useGetCurUser } from "./Hooks/GraphQL/Query/User.Query";
import { Route, Routes } from "react-router-dom";
function App() {
  useHealthCheck();
  console.log(useGetCurUser());
  const pages: curState[] = ["tasks", "about", "join"];
  const [heroState, setHeroState] = useState<HeroStateType>(pageState());
  return (
    <div className="App">
      <Navbar setHeroState={setHeroState} />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      {pages.map((page, index) => (
        <GetRouter cur={page} key={index} heroState={heroState} />
      ))}
    </div>
  );
}

export default App;

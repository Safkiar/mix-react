import { useState } from "react";
import "./App.css";
import DateCounter from "./DateCounter/DateCounter";
import FlashCards from "./FlashCards/FlashCards";
import FarAway from "./FarAway/FarAway";
import Acordion from "./Acordion/Acordion.jsx";
import Tipcalc from "./tipcalc/Tipcalc.jsx";
import Split from "./Split/Split.jsx";
import UsePopcorn from "./UsePopcorn/UsePopcorn.jsx";
import TextExp from "./TextExp/TextExp.jsx";
import Converter from "./Converter/Converter.jsx";
import Location from "./Location/Location.jsx";
import Bankish from "./Bankish/Bankish.jsx";
import Quiz from "./Quiz/Quiz.jsx";
import Compound from "./Compound/Compound.jsx";

function App() {
  return (
    <>
      <nav className="navbar">This will be navbar</nav>
      <div className="container">
        <Quiz />
        <Compound />
        <Bankish />
        <Location />
        <Converter />
        <TextExp />
        <DateCounter />
        <FlashCards />
        <FarAway />
        <Acordion />
        <Tipcalc />
        <Split />
        <UsePopcorn />
      </div>
    </>
  );
}

export default App;

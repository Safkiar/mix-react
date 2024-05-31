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
      <nav className="navbar">
        Please check 13 of react components with different functionality{" "}
      </nav>
      <div className="container">
        <Quiz />
        <hr></hr>
        <UsePopcorn />
        <hr></hr>
        <Bankish />
        <hr></hr>
        <Location />
        <hr></hr>
        <Converter />
        <hr></hr>
        <TextExp />
        <hr></hr>
        <DateCounter />
        <hr></hr>
        <FlashCards />
        <hr></hr>
        <FarAway />
        <hr></hr>
        <Acordion />
        <hr></hr>
        <Tipcalc />
        <hr></hr>
        <Split />
        <hr></hr>
        <Compound />
      </div>
    </>
  );
}

export default App;

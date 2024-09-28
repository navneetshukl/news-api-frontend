import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardDesign from "./components/CardDesign";
import Socket from "./components/Socket";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Socket/>
    </div>
  );
}

export default App;

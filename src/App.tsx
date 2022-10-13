import React, { FC, useState, useCallback, useEffect, useRef, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Hooks/Todos";
import Home from "./UseCustomExample";



const App: FC = () => {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>

      </header>
    </div>
  );
}


export default App;

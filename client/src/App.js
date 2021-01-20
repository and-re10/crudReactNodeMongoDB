import React from "react";
import './styles/App.css';
import Home from "./pages/home/index";
import About from "./pages/about/index";
import OneMovie from "./pages/oneMovie/index";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <OneMovie/>
    </div>
  );
}

export default App;

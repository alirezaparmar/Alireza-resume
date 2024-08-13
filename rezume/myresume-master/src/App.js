import React from "react";
import "./app.css";
import FirstSection from "./contents/FirstSection";
import SecondSection from "./contents/SecondSection";
import ThirdSection from "./contents/ThirdSection";
import Header from "./contents/Header";
import snowStorm from "./snowstorm";

function isIE() {
  return /Trident\/|MSIE/.test(window.navigator.userAgent);
}
let showBrowserAlert = (function () {
  if (document.querySelector('.unsupported-browser')) {
      let d = document.getElementsByClassName('unsupported-browser');

      const is_IE11 = isIE();

      if (is_IE11) {
        
      }
  }
});
document.addEventListener('DOMContentLoaded', showBrowserAlert);


function App() {
  return [
    <Header />,
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  ];
}

export default App;

import {  Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splash/SplashScreen";
import Home from "./components/Home";
import AOS from "aos";
import { useEffect } from "react";


function App() {
   useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    
      <Routes>
        {/* Splash animation page */}
        <Route path="/" element={<SplashScreen />} />

        {/* Home page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    
  );
}

export default App;



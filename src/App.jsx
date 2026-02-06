import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splash/SplashScreen";
import Home from "./components/Home";
import AOS from "aos";
import { useEffect } from "react";
import UserLayout from "./components/Layout/UserLayout";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Gallery from "./components/Pages/Gallery";

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
      {/* Splash Screen – NO Navbar / Footer */}
      <Route path="/" element={<SplashScreen />} />

      {/* Pages WITH Navbar + Footer */}
      <Route element={<UserLayout />}>
        <Route path="/home" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/service" element={<Services />} />
         <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;



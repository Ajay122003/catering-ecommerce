import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.jpeg";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#20B58F]">

      {/* Logo */}
      <img
        src={logo}
        alt="Kaveri Catering Logo"
        className="w-28 h-26 animate-scaleFade"
      />

      {/* Brand Name */}
      <h1 className="mt-4 text-2xl font-heading font-bold text-[#FAD208] animate-slideRight">
        Kaveri Catering
      </h1>

    </div>
  );
}

export default SplashScreen;


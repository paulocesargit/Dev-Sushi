import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.webp";
import bgImage from "../assets/banner.webp";

const Header = () => {
  return (
    <header
      className="w-full h-[400px] bg-zinc-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="Logo do Dev Sushi"
          className="w-32 h-32 rounded-full shadow-xl transform transition duration-500 hover:scale-110"
        />
        <NavLink
          to="/menu"
          className="bg-black px-10 py-3 rounded-full mt-6 shadow-lg transition transform duration-500 hover:scale-105 border border-gray-700 text-white font-semibold text-lg"
        >
          Seg à Sex - 15:00 às 22:00
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

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
        <div className="bg-green-500 px-8 py-3 rounded-full mt-5 shadow-lg transition transform duration-500 hover:scale-105">
          <span className="text-white font-semibold">
            {" "}
            Seg á Sex - 18:00 às 22:00
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

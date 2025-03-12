import logo from "../assets/logo-render.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="text-xl font-bold">Dev Sushi</span>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0 ">
          <a href="/menu" className="hover:text-gray-400">
            Inicio
          </a>
          <a href="/contato" className="hover:text-gray-400">
            Contato
          </a>
          <a href="/politic" className="hover:text-gray-400">
            Política de Privacidade
          </a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm pl-17">
        &copy; {new Date().getFullYear()} DevSushi. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;

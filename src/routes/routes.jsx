import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Menu from "../pages/menu";
import Footer from "../components/footer";
import Contato from "../pages/contato";
import Politic from "../pages/politic";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politic" element={<Politic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

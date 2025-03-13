import React, { useState } from "react";
import MenuItem from "../components/menuItem";
import { FaShoppingCart } from "react-icons/fa";
import sushi1 from "../assets/sushi1.jpg";
import sushi2 from "../assets/sushi2.jpg";
import sushi3 from "../assets/sushi3.jpg";
import sushi4 from "../assets/sushi4.jpg";
import sushi5 from "../assets/sushi5.jpg";
import sushi6 from "../assets/sushi6.jpg";
import sushi7 from "../assets/sushi7.jpg";
import sushi8 from "../assets/sushi8.jpg";
import CartModal from "../components/cartmodal";
import Itemodal from "../components/itemmodal";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as framer from "framer-motion";

const { motion, AnimatePresence } = framer;

const menuItems = [
  {
    name: "Sushi JavaScript",
    description:
      "12 peças: 4 Sashimis de salmão, 4 Niguiris de atum, 4 Hossomakis de pepino.",
    price: "49.90",
    image: sushi1,
  },
  {
    name: "Sushi TypeScript",
    description:
      "14 peças: 6 Sashimis de atum, 4 Niguiris de salmão, 4 Hossomakis de cream cheese.",
    price: "58.90",
    image: sushi2,
  },
  {
    name: "Sushi Node.js",
    description:
      "12 peças: 4 Sashimis de peixe branco, 4 Niguiris de polvo, 4 Uramakis de salmão com gergelim.",
    price: "47.90",
    image: sushi3,
  },
  {
    name: "Sushi Angular",
    description:
      "16 peças: 6 Sashimis de salmão, 4 Niguiris de camarão, 6 Hossomakis de kani.",
    price: "65.90",
    image: sushi4,
  },
  {
    name: "Sushi Java",
    description:
      "14 peças: 6 Sashimis de polvo, 4 Niguiris de atum, 4 Uramakis de salmão com abacate.",
    price: "72.90",
    image: sushi5,
  },
  {
    name: "Sushi React",
    description:
      "12 peças: 4 Sashimis de atum, 4 Niguiris de salmão, 4 Hossomakis de pepino com cream cheese.",
    price: "52.90",
    image: sushi6,
  },
  {
    name: "Sushi Python",
    description:
      "14 peças: 6 Sashimis de peixe branco, 4 Niguiris de camarão, 4 Uramakis de kani crocante.",
    price: "59.90",
    image: sushi7,
  },
  {
    name: "Sushi .Net",
    description:
      "12 peças: 4 Sashimis de salmão, 4 Niguiris de polvo, 4 Hossomakis de manga com gergelim.",
    price: "48.90",
    image: sushi8,
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    toast.success(`${item.name} adicionado ao carrinho!`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setSelectedItem(null);
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleShowDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {showCartModal && (
        <CartModal
          cartItems={cart}
          onRemoveItem={handleRemoveItem}
          onClose={handleCloseCartModal}
          onClearCart={() => setCart([])}
        />
      )}

      {selectedItem && (
        <Itemodal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mt-12 mb-8 text-white-800">
          Nossos Sushis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mb-16">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              onAddToCart={handleAddToCart}
              onShowDetails={handleShowDetails}
            />
          ))}
        </div>
      </div>

      <motion.button
        onClick={handleCartClick}
        className="fixed bottom-5 right-10 bg-orange-500 p-4 rounded-full text-white shadow-lg hover:bg-orange-600 transition duration-300"
        animate={{ scale: cart.length > 0 ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </motion.button>
      <ToastContainer />
    </div>
  );
};

export default Menu;

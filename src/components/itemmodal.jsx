import * as framer from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const { motion, AnimatePresence } = framer;

const ItemDetailModal = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const handleAddToCart = () => {
    onAddToCart({ name: item.name, price: item.price, image: item.image });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
          >
            <AiOutlineClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-md mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-sm mb-4">{item.description}</p>
          <p className="text-lg font-bold">Preço: R$ {item.price}</p>
          <div className="mt-4 flex justify-center">
            <motion.button
              className="bg-green-500 px-5 py-2 text-white rounded-full hover:bg-green-600 transition duration-300"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Adicionar ao Carrinho
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemDetailModal;

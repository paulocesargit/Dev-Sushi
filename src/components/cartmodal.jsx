import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartModal = ({ cartItems, onRemoveItem, onClose, onClearCart }) => {
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleFinalizePurchase = () => {
    toast.success("Compra finalizada com sucesso!");

    setTimeout(() => {
      onClearCart();
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[600px] max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
        >
          <AiOutlineClose />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Seu Carrinho</h2>

        {groupedItems.length === 0 ? (
          <div className="text-center">
            <p className="text-lg">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex-1 ml-3">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-600">Qtd: {item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="font-bold">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                      onClick={() => onRemoveItem(index)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-bold text-xl">Total:</span>
              <span className="text-xl">R$ {total.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                onClick={handleFinalizePurchase}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

const CartModal = ({ cartItems, onRemoveItem, onClose }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg">Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="space-y-3">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span>R$ {item.price}</span>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                    onClick={() => onRemoveItem(index)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <span className="font-bold text-xl">Total:</span>
              <span className="text-xl">R$ {total.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 px-5 py-2 text-white rounded-full hover:bg-blue-600 transition duration-300"
                onClick={onClose}
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

const CartModal = ({ cartItems, onRemoveItem, onClose }) => {
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
        {groupedItems.length === 0 ? (
          <p className="text-lg">Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="space-y-3">
              {groupedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div className="flex-1 ml-3">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-600">Qtd: {item.quantity}</p>
                  </div>
                  <span className="font-bold">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
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
            <div className="mt-4">
              <button
                className="w-full bg-blue-500 px-5 py-2 text-white rounded-full hover:bg-blue-600 transition duration-300"
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

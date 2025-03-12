const ItemDetailModal = ({ item, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ name: item.name, price: item.price, image: item.image }); // Chama a função que adiciona o item ao carrinho
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm mb-4">{item.description}</p>
        <p className="text-lg font-bold">Preço: R$ {item.price}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-green-500 px-5 py-2 text-white rounded-full hover:bg-green-600 transition duration-300"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;

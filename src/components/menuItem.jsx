const MenuItem = ({
  name,
  description,
  price,
  image,
  onAddToCart,
  onShowDetails,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex gap-4 hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => onShowDetails({ name, description, price, image })}
    >
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-md hover:-rotate-3 hover:scale-110 duration-300"
      />
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-xl">R$ {price}</p>
          <button
            className="bg-green-500 px-5 py-2 text-white rounded-full hover:bg-green-600 transition duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart({ name, price, image });
            }}
          >
            <i className="fas fa-cart-plus text-lg"></i> Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

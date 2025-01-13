const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100">
          <img
            src={product.image[0]}
            alt={product.productName}
            className="object-cover object-center max-h-full max-w-full"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.productName}</h2>
          <p className="text-sm text-gray-600 truncate">{product.productData}</p>
          <p className="text-sm font-medium text-blue-500 mt-2">Temp: {product.temp}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
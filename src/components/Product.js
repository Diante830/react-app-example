const Product = ({product}) => (
    <div className="max-w-48 max-h-64 shadow-lg p-4 flex flex-col justify-between">
        <img 
            src={product.image} 
            alt={product.image} 
            className="w-64 h-32 rounded"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
    </div>
)

export default Product;
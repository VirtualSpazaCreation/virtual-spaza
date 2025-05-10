
import { useRouter } from 'next/router';
import products from '../../../data/products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetail() {
  const { dispatch } = useCart();
  const router = useRouter();
  const { category, id } = router.query;
  const productList = products[category] || [];
  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">R{product.price}</p>
      <p className="text-sm text-gray-600 mb-6">High quality {product.name} from our {category} collection.</p>
      <button
        onClick={() => dispatch({ type: 'ADD', payload: product })}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}


import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export default function CartPanel({ isOpen, onClose }) {
  const { cart, dispatch } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={\`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform \${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 p-4 flex flex-col\`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose}><X size={20} /></button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? <p className="text-center mt-8 text-gray-500">Your cart is empty.</p> : (
          cart.map((item) => (
            <div key={item.id} className="mb-4 flex items-center border-b pb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-2 rounded" />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm">R{item.price} x {item.quantity}</p>
                <div className="flex gap-2 mt-1 text-xs">
                  <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })} className="bg-gray-200 px-2 rounded">-</button>
                  <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })} className="bg-gray-200 px-2 rounded">+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })} className="text-red-500">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-4 border-t pt-4">
        <p className="font-semibold mb-2">Subtotal: R{subtotal}</p>
        <button className="w-full bg-black text-white py-2 rounded">Checkout</button>
        <button onClick={onClose} className="mt-2 w-full bg-gray-200 py-2 rounded">Continue Shopping</button>
      </div>
    </div>
  );
}

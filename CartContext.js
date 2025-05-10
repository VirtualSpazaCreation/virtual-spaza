
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);
      if (existing) {
        return state.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...state, { ...item, quantity: 1 }];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    case 'INCREMENT':
      return state.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item);
    case 'DECREMENT':
      return state.map((item) => item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

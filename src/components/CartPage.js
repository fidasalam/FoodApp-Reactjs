import React, { useState } from 'react';
import { useCart } from './CartCContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    return initialQuantities;
  });

  // Update quantity handler
  const handleUpdateQuantity = (item, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.id]: Math.max(newQuantity, 1) // Ensure quantity is at least 1
    }));
  };

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + (item.price * (quantities[item.id] || 1)), 0);

  return (
    <div className="container cartbox">
      <h1>Cart Page</h1>
      {cart.map((item) => (
        <div className="product" key={item.id}>
          <img src={item.image} alt={item.productName} className="product-image" />
          <div className="product-info">
            <p>{item.productName}</p>
            <p>₹{item.price}</p>
            <div className="quantity">
              <button onClick={() => handleUpdateQuantity(item, (quantities[item.id] || 1) - 1)} disabled={(quantities[item.id] || 1) <= 1}><FaMinus /></button>
              <span>{quantities[item.id] || 1}</span>
              <button onClick={() => handleUpdateQuantity(item, (quantities[item.id] || 1) + 1)}><FaPlus /></button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}><FaTrash /></button>
          </div>
        </div>
      ))}
      <div className="total">
        <p>Total: ₹{parseFloat(total).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartPage;

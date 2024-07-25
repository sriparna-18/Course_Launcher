// src/components/Cart.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const removeFromCart = (courseId) => {
    const updatedCart = cart.filter(course => course.id !== courseId);
    navigate('/cart', { state: { cart: updatedCart } });
  };

  const proceedToCheckout = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: totalPrice * 100, // Amount is in currency subunits. For example, 100 paise = INR 1
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Course Purchase',
      handler: function (response) {
        alert('Payment successful!');
        // Handle post-payment actions here
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const goBack = () => {
    navigate('/Courses');
  };

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((course, index) => (
              <li key={index}>
                {course.title} - ${course.price}
                <button onClick={() => removeFromCart(course.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
      <button onClick={goBack}>Back to Courses</button>
    </div>
  );
};

export default Cart;

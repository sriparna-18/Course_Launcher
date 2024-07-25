// src/components/CoursesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CoursesPage.css';

const courses = [
  { id: 1, title: 'Bridge Course for Basic Mathematics', description: 'Matrices, Integration and Differentiation concepts', price: 100 },
  { id: 2, title: 'Course 2', description: 'Description for Course 2', price: 150 },
  // Add more courses as needed
];

const CoursesPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (course) => {
    if (!cart.includes(course)) {
      setCart([...cart, course]);
    }
  };

  const goToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className="courses-page">
      <div className="header">
        <h1>Our Courses</h1>
        <FaShoppingCart className="cart-icon" onClick={goToCart} />
      </div>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <button onClick={() => addToCart(course)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

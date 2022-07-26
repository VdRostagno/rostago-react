import React, { useState } from "react";
import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';
import "./styles.css";

const categories = [
  {
      id: 1,
      path: '/',
      name: 'Home',
  },
  {
      id: 2,
      path: 'category/Scooters',
      name: 'Scooters',
  },
  {
      id: 3,
      path: '/category/Deportivo',
      name: 'Depotivo',
  },
  
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <span className="nav-logo">E-commerce</span>
      <ul>
      <div className="nav-items">
                {categories.map((category) => (
                    <Link className="nav-item" to={category.path} key={category.id}>
                        {category.name}
                    </Link>
               ))}
      </div> 
            </ul>
      <div className="cart">
        <CartWidget />
      </div>

      <div className="nav-mobile">
        <div className="cart-mobile">
          <CartWidget />
        </div>
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`.trim()}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

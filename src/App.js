import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/Navbar";
import Cart from "./components/CartWidget";
import Contacto from "./components/Contacto";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  // {show ? (
  //   <Amazon handleClick={handleClick} />
  // ) : (
  //   <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  // )}

  

  return (
    
    <div>
      
        <Navbar setShow={setShow} size={cart.length} />
      <Routes>
        <Route path="/" element={<Amazon handleClick={handleClick} />}  />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
      </Routes>
    </div>
  );
};

export default App;

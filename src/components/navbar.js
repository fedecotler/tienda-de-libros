import React from "react";
import "../styles/navbar.css";
import { Link} from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <Link to="/"><span className="my_shop" onClick={() => setShow(true)}>
          Tienda de Libros
        </span></Link>
        <Link to="/contacto">contacto</Link>
        <Link to="/carrito"><div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div></Link>
      </div>
    </nav>
  );
};

export default Navbar;

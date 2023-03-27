import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./order";

const showOrders = (props) => {

  let sum = 0;

  props.orders.forEach(el => sum += Number.parseFloat(el.price))

  return (
    <div>
      {props.orders.map((el) => {
        return <Order onDelete={props.onDelete} key={el.id} item={el} />;
      })}
      <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)} ₽</p>
    </div>
  );
};

const showNothing = () => {
  return(
    <div className="empty">
      <h2>Корзина пустая :(</h2>
    </div>
  )
}

function Header(props) {
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleClickOpenCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header>
      <div className="wrap">
        <span className="logo">Mebel-Ing</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => handleClickOpenCart()}
          className={`shopAddCart  ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
           {
            props.orders.length > 0 ? showOrders(props) : showNothing()
           }
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css"

const TotalItems = () => {
    const {cart} = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, elem) => acc+elem.quanty, 0);
  return <span className="cart-items-total">{itemsQuanty}</span>
}

export default TotalItems;
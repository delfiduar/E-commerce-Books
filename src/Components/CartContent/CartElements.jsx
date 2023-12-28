import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css";

const CartElements = () => {
    const {cart, setCart}= useContext(dataContext);

    const deleteProduct = (id) => {
        const findId = cart.find((elem) => elem.id === id);

        const newCart = cart.filter((elem)=> {
            return elem !== findId;
        });
        setCart(newCart);
    }
    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="" />
                <h4 className="name">{product.title}</h4>
                <CartItemCounter product= {product}/>
                <p className="price">Price: ${product.price * product.quanty}</p>
                <p onClick={() => deleteProduct(product.id)}>❌</p>
            </div>
        )
    })
}

export default CartElements;
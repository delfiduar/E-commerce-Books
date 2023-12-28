import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const {data, buyProducts} = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="products-container" key={product.id}>
                <div className="product-card">
                    <img src={product.img} alt="img-product-card"></img>
                    <h3>{product.title}</h3>
                    <p className="price">Precio: ${product.price}</p>
                    <button className="buy-button" onClick={() => buyProducts(product)}>buy</button>
                </div>
            </div>
          )
    })
}

export default Products;

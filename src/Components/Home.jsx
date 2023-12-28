import Banner from "./Banner/Banner";
import NavBar from "./Navbar/NavBar"
import Products from "./Products/Products";


const Home = () => {
    return(
        <div className="container">
            <NavBar/>
            <Banner/>
            <div className="product-card-container">
                <Products/>
            </div>
        </div>
    )
}

export default Home;
import './App.css';
import nintendoBkg from "./SVG Assets/nintendoBkg.svg";

function ProductIcon() {
    return(
        <div className="product-icon">
              <img src={nintendoBkg} alt="nintendoBkg" />
              <p>$$$ Dollars</p>
            </div>
    )
}

export default ProductIcon
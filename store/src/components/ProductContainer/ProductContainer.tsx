import { IProductContainer } from "../../interfaces";
import "./ProductContainer.css";

function ProductContainer({ name, imageLink, altName, price, description }: IProductContainer) {

    return (
        <article className="product-container-big">
            <div className="name-container-big">
                {name}
            </div>
            <img src={imageLink} alt={altName} />
            <div className="price-container-big">
                <p>{`${price} kronor`}</p>
            </div>
            <div className="description-container">
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ProductContainer;
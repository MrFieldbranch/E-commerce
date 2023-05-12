import { IProductForGrid } from "../../interfaces";
import "./ProductForGrid.css";

function ProductForGrid({ name, imageLink, altName, price }: IProductForGrid) {

    return (
        <article className="product-container-small">
            <h3>
                {name}
            </h3>
            <div className="image-container-small">
                <img src={imageLink} alt={altName} />
            </div>
            <p>{`${price} kronor`}</p>
        </article>
    );
}

export default ProductForGrid;
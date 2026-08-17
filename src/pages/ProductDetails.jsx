
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="product-details">

      <div className="details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="details-info">

        <p className="category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <h2>
          Rs. {product.price.toLocaleString()}
        </h2>

        <p>
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
        >
          Add to Cart 
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;
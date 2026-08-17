import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

<Link to={`/products/${product.id}`}>
  <img
    src={product.image}
    alt={product.name}
    className="product-image"
  />
</Link>
      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h2>{product.name}</h2>

        <p className="description">
          {product.description}
        </p>

        <h3>
          Rs. {product.price.toLocaleString()}
        </h3>
{/* 
        <Link to={`/products/${product.id}`}>
          <button className="details-button">
            View Details
          </button>
        </Link> */}

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
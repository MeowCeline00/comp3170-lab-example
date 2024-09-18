export default function Product({ product }) {
    return (
      <div className="product">
        <div className="product-name">
          <img src={product.image_url} alt={product.name} />
        </div>
        <p>
          <span className="pr-name">{product.name}</span>
          <span className="pr-price">${product.price}</span>
        </p>
        <button>add to cart</button>
        <button>
          <span>&#129293;</span>
          <span>add to wishlist</span>
        </button>
      </div>
    );
  }
  
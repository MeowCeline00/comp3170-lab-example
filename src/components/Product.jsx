export default function Product(product) {

    return(
        <div class="product">
            <div className="product-name">
            <img src={product.image_url} alt="" />
            </div>
            <p>
              <span class="pr-name">{product.name}</span>
              <span class="pr-price">${product.price}</span>
            </p>
            <button>add to cart</button>
            <button>
                <span>&#129293;</span>
                <span>add to wishlist</span>
            </button>
          </div>
    );
}
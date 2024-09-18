import FooterColumn from "./components/FooterColumn";
import Product from "./components/Product";

const Links = [
  {
    title: "Our store",
    links: ["About Us", "Contact Us", "Become a Partner"],
  },
  {
    title: "Our Policies",
    links: ["Return Policies", "Shipping Policy", "Terms of Services"],
  },
  {
    title: "Our Products",
    links: ["About Us", "Contact Us", "Become a Partner"],
  },
];

const PRODUCTS = [
  {
    name: "chair",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/8/86/Fauteuil_Riviera_Chaise_Bleue_Neptune_SBR.jpg",
    price: 20,
  },
  {
    name: "desk",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/2/28/%22Tibattant%22_Desk_MET_DP291946.jpg",
    price: 500,
  },
  {
    name: "shelf",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Books_Shelf..jpg",
    price: 400,
  },
  {
    name: "lamp",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Lamp_in_Poland.jpg",
    price: 0,
  },
  {
    name: "sofa",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/2/29/ORANGE_SOFA.jpg",
    price: 2000,
  },
  {
    name: "coffee table",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Glass_coffee_table.jpg",
    price: 800,
  },

]

function App() {
  const footerColumnList = Links.map(column => (
    <FooterColumn key={column.title} data={column} />
  ));

  const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />)

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">2</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>
          
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>
          {productList}
        </main>
      </section>
      <footer>
        <div>{footerColumnList}</div>
        <div>&copy; Yves Rene Shema, 2024</div>
      </footer>
    </div>
  );
}

export default App;

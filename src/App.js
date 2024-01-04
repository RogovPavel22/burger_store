import { Basket } from "./components/Basket";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ModalProduct } from "./components/ModalProduct/ModalProduct";
import { ProductList } from "./components/ProductList/ProductList";
import { Categories } from "./components/Сategories";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Categories />
          <section className="menu">
            <Basket />
            <ProductList />
          </section>
        </div>
      </main>
      <Footer />
      <ModalProduct />
    </>
  );
}

export default App;

import { useSelector } from "react-redux";
import { Basket } from "./components/Basket";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { ModalBasket } from "./components/ModalBasket/ModalBasket";
import { ModalProduct } from "./components/ModalProduct/ModalProduct";
import { ProductList } from "./components/ProductList/ProductList";
import { Categories } from "./components/Сategories";
import { isCloseDelivery, isCloseProduct } from "./redux/slices/modalSlice";

function App() {
  const { activeProduct, activeDelivery } = useSelector((state) => state.modal);

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
      <Modal active={activeProduct} close={isCloseProduct}>
        <ModalProduct />
      </Modal>
      <Modal active={activeDelivery} close={isCloseDelivery}>
        <ModalBasket />
      </Modal>
    </>
  );
}

export default App;

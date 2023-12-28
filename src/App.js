import { Basket } from "./components/Basket";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Categories } from "./components/Сategories";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Categories />
          <section className="menu">
            <Basket />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

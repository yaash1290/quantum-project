import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonials";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Products/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

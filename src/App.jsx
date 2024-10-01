import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

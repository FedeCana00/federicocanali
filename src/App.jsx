
import "./app.scss";
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

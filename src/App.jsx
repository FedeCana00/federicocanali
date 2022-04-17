import "./app.scss";
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

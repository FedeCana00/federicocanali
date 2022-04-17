import "./app.scss";
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Works />
    </div>
  );
}

export default App;

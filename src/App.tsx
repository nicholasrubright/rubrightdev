import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <div className="container-fluid py-5">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="sections">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

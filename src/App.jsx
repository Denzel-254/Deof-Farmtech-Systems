import "./App.css";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

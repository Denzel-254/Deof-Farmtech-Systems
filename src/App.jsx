import "./App.css";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/common/Footer";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import LearnPage from "./pages/LearnPage";
import ContactPage from "./pages/ContactPage";
import UploadPage from "./pages/UploadPage";
import Admin from "./pages/admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Stats />
              <Testimonials />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/_secure/manage-products-9xK2" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

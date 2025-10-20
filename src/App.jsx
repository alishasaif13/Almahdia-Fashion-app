import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutPage from "./components/About-Page";
import ContactPage from "./components/Contact-Page";
import ShopPage from "./components/Shop";


function App() {
  return (
    <Router>
      {/* Navbar sab pages pe visible */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage/>} />
        
         <Route path="/contact" element={<ContactPage/>} />
        
      </Routes>

      {/* Footer sab pages pe visible */}
      <Footer />
    </Router>
  );
}

export default App;

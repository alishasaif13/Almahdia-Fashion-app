import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutPage from "./components/About-Page";
import ContactPage from "./components/Contact-Page";
import ShopPage from "./components/Shop";
import ProductDetail1 from "./components/ProductDetail1";
import ProductDetail2 from "./components/ProductDetail2";
import ProductDetail3 from "./components/ProductDetail3";
import ProductDetail4 from "./components/ProductDetail4";
import ProductDetail16 from "./components/ProductDetail16";
import ProductDetail5 from "./components/ProductDetail5";
import ProductDetail13 from "./components/ProductDetail13";
import ProductDetail12 from "./components/ProductDetail12";
import ProductDetail11 from "./components/ProductDetail11";
import ProductDetail10 from "./components/ProductDetail10";
import ProductDetail9 from "./components/ProductDetail9";
import ProductDetail8 from "./components/ProductDetail8";
import ProductDetail7 from "./components/ProductDetail7";
import ProductDetail6 from "./components/ProductDetail6";
import ProductDetail15 from "./components/ProductDetail15";
import CartPage from "./components/CartPage";

function App() {
  return (
    
    <Router>
      <Navbar />

      <Routes>
        <Route path="/cart" element={<CartPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/Product1" element={<ProductDetail1 />} />
        <Route path="/Product2" element={<ProductDetail2 />} />
         <Route path="/Product3" element={<ProductDetail3 />} />
            <Route path="/Product4" element={<ProductDetail4 />} /> 
              <Route path="/Product5" element={<ProductDetail15 />} />
                 <Route path="/Product6" element={<ProductDetail6 />} />
                    <Route path="/Product7" element={<ProductDetail7/>} />
                       <Route path="/Product8" element={<ProductDetail8 />} />
                          <Route path="/Product9" element={<ProductDetail9 />} />
                             <Route path="/Product10" element={<ProductDetail10 />} />
                                <Route path="/Product11" element={<ProductDetail11 />} />
                                   <Route path="/Product12" element={<ProductDetail12 />} />
                                      <Route path="/Product13" element={<ProductDetail13 />} />
                                         <Route path="/Product14" element={<ProductDetail4 />} />
                                            <Route path="/Product15" element={<ProductDetail5 />} />
                                               <Route path="/Product16" element={<ProductDetail16 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

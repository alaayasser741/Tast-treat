import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Cart from "./Pages/Cart";
import Food from "./Pages/Cart";
import Contact from "./Pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food" element={<Food />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

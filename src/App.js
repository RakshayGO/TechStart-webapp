import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header' 
import Footer from './Components/Footer' 
import Home from './Components/Home' 
import Order from './Components/Order' 
import Services from './Components/Services' 

import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Footer.scss";
import "./Styles/Home.scss";
import "./Styles/Order.scss";
import "./Styles/mediaquery.scss";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
        <Footer />
    </Router>
  );
}
export default App;

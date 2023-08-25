import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

import Services from "./Components/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
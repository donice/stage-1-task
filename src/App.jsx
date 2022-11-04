import React from "react";
import "./index.css";
import Linktree from "./Pages/Linktree";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Linktree />} />
        <Route path="contact" element={<Contact />} />
     
      </Routes>
       <Footer />
    </div>
  );
}

export default App;

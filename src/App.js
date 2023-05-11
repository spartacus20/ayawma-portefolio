import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer />
    </div >
  );
}

export default App;

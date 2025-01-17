import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NecklaceGrid from './components/catNecklace'; 
import CatalogPage from './components/CP_Necklace';
import Card from './components/card';
import RingGrid from './components/catRing';
import CatalogRing from './components/CP_Ring'; // import CatalogRing

function App() {
  return (
    <Router>
      <div>
        {/* Navbar tetap muncul di setiap halaman */}
        <Navbar />

        {/* Halaman utama */}
        <Routes>
          <Route path="/" element={<><Hero /><Card /><NecklaceGrid /><RingGrid/></>} />
          
          {/* Halaman katalog */}
          <Route path="/catalog/necklace" element={<CatalogPage />} />
          
          {/* Halaman katalog Ring */}
          <Route path="/catalog/ring" element={<CatalogRing />} /> {/* Tambahkan rute ini */}
        </Routes>

        {/* Footer tetap muncul di setiap halaman */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

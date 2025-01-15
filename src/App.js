import './App.css';
import Hero from './components/hero';
import Footer from './components/footer';
import ProductGrid from './components/card';
import ProductCarousel from './components/swiper';

function App() {
  return (
      <div>
        <Hero />
        <ProductGrid />
        <Footer />
      </div>
  );
}

export default App;

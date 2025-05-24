import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Carrinho from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.css';

// Import Pages
import Erro from './components/404/Erro';
import Home from './pages/Home';
import ProdutoDetalhes from './components/Detalhes/Detalhes';
import ScrollToTop from './components/ScrollToTop';
import PaginaCategoria from './components/PaginaCategoria/PaginaCategoria';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sacola" element={<Carrinho />} />
        <Route path="/produtos/:categoria" element={<PaginaCategoria />} />
        <Route path="/detalhes/produto/:modelo/:marca/:id" element={<ProdutoDetalhes />} />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
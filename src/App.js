import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

import PaginaCarrinho from './pages/Carrinho/Carrinho';
import PaginaNaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import PaginaInicial from './pages/Home/Home';
import PaginaDetalhes from './pages/Detalhes/Detalhes';
import PaginaCategoria from './pages/Categorias/Categorias';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        {/* <Route path="/sacola" element={<PaginaCarrinho />} /> */}
        <Route path="/produtos/:categoria" element={<PaginaCategoria />} />
        <Route path="/detalhes/produto/:modelo/:marca/:id" element={<PaginaDetalhes />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
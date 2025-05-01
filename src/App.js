import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CarrinhoProvider } from './context/CarrinhoContext';

import Carrinho from './components/Cart/Cart';
// import Carrinho from './components/cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Erro from './components/404/Erro';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sacola" element={<Carrinho />} />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
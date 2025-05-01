import React from 'react'; // import da biblioteca 'react' 
import ReactDOM from 'react-dom/client';
import { CarrinhoProvider } from './context/CarrinhoContext'; // ajuste o caminho conforme seu projeto

import { BrowserRouter } from 'react-router-dom'; // import do componente para gerenciar as rotas
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CarrinhoProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CarrinhoProvider>
    </React.StrictMode >
);
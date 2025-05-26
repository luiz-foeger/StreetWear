import React from 'react'

import Buttons from '../components/Buttons/Buttons';
import Banner from '../components/Banner/Banner';
import Carrossel from '../components/Carrossel/Carrossel';

import { vestuario, shorts, accessories, sneakers, skateItens } from '../data/products';

const Home = () => {
    return (
        <>
            <Banner />
            <Buttons />
            <h3 style={{ margin: '25px 0'}}></h3>
            <div>
                <Carrossel
                    titulo="Camisetas"
                    produtos={vestuario}
                    linkVerTudo="/produtos/acessorios"
                />
                <Carrossel
                    titulo="Camisetas"
                    produtos={shorts}
                    linkVerTudo="/produtos/acessorios"
                />
                <Carrossel
                    titulo="Camisetas"
                    produtos={accessories}
                    linkVerTudo="/produtos/vestuario"
                />
                <Carrossel
                    titulo="Camisetas"
                    produtos={sneakers}
                    linkVerTudo="/produtos/sneakers"
                />
                <Carrossel
                    titulo="Camisetas"
                    produtos={skateItens}
                    linkVerTudo="/produtos/skaterboard"
                />
            </div>
        </>
    )
}

export default Home
import React from 'react'

import Buttons from '../components/Buttons/Buttons';

import Banner from '../components/Banner/Banner';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';
import { vetCatalogo } from '../data/products';

const Home = () => {
    return (
        <>
            <Banner />
            <Buttons />
            <div>
                <ListaProdutos produtos={vetCatalogo} />
            </div>
        </>
    )
}

export default Home
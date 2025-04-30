import React from 'react'
import Buttons from '../components/Buttons/Buttons' // import do componente Home
import ListaProdutos from '../components/ListaProdutos/ListaProdutos'
import Cart from '../components/Cart/Cart'

const Home = () => {
    return (
        <>
            <Buttons />
            <ListaProdutos />
        </>
    )
}

export default Home
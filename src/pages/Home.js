import React from 'react'

import Buttons from '../components/Buttons/Buttons';

import Camisetas from '../pages/PageCamisetas';
import Blusas from '../pages/PageBlusas';
import Banner from '../components/Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <Buttons />
            <Blusas />
        </>
    )
}

export default Home
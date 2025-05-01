import React from 'react'

import Buttons from '../components/Buttons/Buttons';

import Camisetas from '../pages/PageCamisetas';
import Blusas from '../pages/PageBlusas';

const Home = () => {
    return (
        <>
            <Buttons />
            {/* <Camisetas /> */}
            <Blusas />
        </>
    )
}

export default Home
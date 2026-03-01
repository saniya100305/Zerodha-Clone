import React from 'react';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HeroPage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HeroPage;
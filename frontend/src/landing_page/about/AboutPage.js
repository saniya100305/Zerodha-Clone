import React from 'react';

import Hero from './Hero';
import Teams from './Teams';

import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HeroPage() {
    return (
        <>
            <Teams/>
            <Hero />

            <NavBar />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HeroPage;
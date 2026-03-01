import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HeroPage() {
    return (
        <>
            < CreateTicket/>
            <Hero/>

            <NavBar />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HeroPage;
import React from 'react';

import Hero from './Hero';
import Brokerage from './Brokerage';

import OpenAccount from '../OpenAccount';
import NavBar from '../../Navbar';
import Footer from '../../Footer';

function HeroPage() {
    return (
        <>
            <Brokerage/>
            <Hero/>

            
            <OpenAccount />
            
        </>
    );
}

export default HeroPage;
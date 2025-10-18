import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Features />
            <HowItWorks />
            <UseCases />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;
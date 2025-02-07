import React from 'react';
import Banner from '../../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id='home' className='max-w-[1320px] mx-auto'>
            <div >
            <Banner></Banner>
            </div>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;
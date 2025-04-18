import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Scrollup from './components/Scrollup/Scrollup';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Qualification />
                <Contact />
            </main>
            <Footer />
            <Scrollup />
        </>
    );
}

export default App;

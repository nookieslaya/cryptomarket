import React from 'react'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar/>
            <Hero/>
            <About/>
            <Features/>
            <Story/>
            <Footer/>
        </main>
    )
}

export default App


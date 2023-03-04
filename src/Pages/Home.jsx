import React from 'react'
import Landing from '../Components/home/Landing/Landing'
import Services from '../Components/home/Services/Services'
import Popular from '../Components/home/Popular/Popular'
import About from '../Components/home/About/About'
import HotPizza from '../Components/home/HotPizza/HotPizza'
import Testimonial from '../Components/home/Testimonial/Testimonial'
const Home = () => {
    return (
        <main>
            <Landing />
            <Services />
            <Popular />
            <About />
            <HotPizza />
            <Testimonial />
        </main>
    )
}

export default Home
import React from "react";
import Navbar from "../Navbar/Navbar";
import CollegeHero from "../Hero/CollegeHero";
import Section from "../Info/Section";
import Footer from "../Footer/Footer";
import ServiceCards from "../ServiceCards/ServiceCards";
import Carousel from "../Carousel/Carousel";
import Testimonials from "../Testimonials/Testimonials";

function Home(){
    return(
        <div>
            <Navbar/>
            <CollegeHero/>
            <Section/>
            <ServiceCards/>
            <Carousel/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Home;
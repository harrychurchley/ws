import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/IMG_8351.jpeg";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

function About (){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="About"
            btnClass="hide"
            />
            <AboutMe />
            <Footer />
        </>
 

    );

}

export default About;
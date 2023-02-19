import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutImg from "../images/IMG_8351.jpeg"

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
        
        </>
        
        


    )

}

export default About;
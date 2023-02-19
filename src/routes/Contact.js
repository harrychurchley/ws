import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactImg from "../images/IMG_0780.jpeg"

function Contact (){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={ContactImg}
            title="Contact"
            btnClass="hide"
            />
        
        </>


    )

}

export default Contact;

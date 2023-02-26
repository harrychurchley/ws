import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Project1Img from "../images/snakes.jpg";
import Footer from "../components/Footer";
import Ipynb from "../components/ipynb";

function ProjSnakes (){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={Project1Img}
            title="Snakes of Vietnam"
            btnClass="hide"
            />
            <Ipynb />
            <Footer />
            
        
        </>
 

    )

}

export default ProjSnakes;
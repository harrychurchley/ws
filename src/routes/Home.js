import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeImg from "../images/IMG_7712.jpg"

function Home (){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Marouane Chamakh"
            text="Deadly Striker"
            buttonText="Goal Statistics"
            url="/"
            btnClass="show"
            />
        
        </>


    );

}

export default Home;
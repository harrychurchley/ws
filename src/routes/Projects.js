import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectsImg from "../images/dig.jpeg"

function Projects (){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={ProjectsImg}
            title="Projects"
            btnClass="hide"
            />
        
        </>
        
        


    )

}

export default Projects;
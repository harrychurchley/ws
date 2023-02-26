import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectsImg from "../images/dig.jpeg"
import Project from "../components/Project"
import Footer from "../components/Footer"

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
            <Project />
            <Project />
            <Footer />
        </>
        
        


    )

}

export default Projects;
import "./ProjectStyles.css"
import ProjectData from "./ProjectData"
import Project1 from "../images/IMG_7712.jpg"
import Project2 from "../images/IMG_8351.jpeg"
import Project3 from "../images/IMG_8972.jpeg"


function Project(){
    return(
        <div className="project">
            <h1>Projects</h1>
            <p>Here are a few projects</p>
            <div className="projectcard">

                <ProjectData
                image={Project1}
                heading = "Project 1"
                text = "text 1"
                />

                <ProjectData
                image={Project2  }
                heading = "Project 2"
                text = "text 2"
                />

                 <ProjectData
                image={Project3}
                heading = "Project 3"
                text = "text 3"
                />



            </div>
        </div>
    );
}

export default Project
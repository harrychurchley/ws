import DescImage1 from "../images/IMG_0460.jpg"
import DescImage2 from "../images/IMG_7712.jpg"
import DescImage3 from "../images/IMG_3621.jpeg"
import DescImage4 from "../images/IMG_3926.jpeg"
import "./DescriptionStyles.css"

const Description = () => {
    return (
        <div className = "description">
            <h1>This is a test website</h1>
            <p>Test paragraph</p>
            <div className="first-des">
                <div className="des-text">
                    <h2> Chamakh </h2>
                    <p> Born in Morocco, Marouane Chamakh made his name as a lethal Premier League striker. Nicknamed "The Shark" for his dorsal fin-like mohican hairstyle and preditory instincts in the 6 yard box, Chamakh accrued 24 goals in English football as well a reputation for being one of the best in the business. 

                    </p>
            </div>
            <div className="image">
                <img alt="img" src={DescImage1}/>
                <img alt="img" src={DescImage2}/>
            </div>
        </div>
    </div>    
    );
};

export default Description  
import DescImage1 from "../images/IMG_0460.jpg"
import DescImage2 from "../images/IMG_7712.jpg"
import DescImage3 from "../images/IMG_3621.jpeg"
import DescImage4 from "../images/IMG_3926.jpeg"
import "./DescriptionStyles.css"
import DescriptionData from "./DescriptionData"

const Description = () => {
    return (
        <div className = "description">
            <h1>This is a test heading</h1>
            <p>Test paragraph</p>

            <DescriptionData
            className="first-des"
                heading="Marouane Chamakh"
                text="Born in Morocco, Marouane Chamakh made his name as a lethal Premier League striker. Nicknamed 'The Shark' for his dorsal fin-like mohican hairstyle and preditory instincts in the 6 yard box, Chamakh accrued 24 goals in English football as well a reputation for being one of the best in the business."
                img1={DescImage3}
                img2={DescImage4}
            />
            <DescriptionData
            className="first-des-reverse"
                heading="Emmanuel Eboue"
                text="Born in Morocco, Marouane Chamakh made his name as a lethal Premier League striker. Nicknamed 'The Shark' for his dorsal fin-like mohican hairstyle and preditory instincts in the 6 yard box, Chamakh accrued 24 goals in English football as well a reputation for being one of the best in the business."
                img1={DescImage1}
                img2={DescImage2}
            />
    </div>    
    );
};

export default Description;
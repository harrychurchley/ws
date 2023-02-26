import { IpynbRenderer } from "react-ipynb-renderer";
import "react-ipynb-renderer/dist/styles/monokai.css";
import TestIpynb from "../images/notebooks.json";
import "react-ipynb-renderer/dist/styles/onedork.css";
function Ipynb(){
    return(
        <div className="my_ipynb">
            <IpynbRenderer ipynb={TestIpynb} syntaxTheme={"okaidia"}/>
        </div>



    );

}

export default Ipynb
    
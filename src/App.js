import "./styles.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import ProjSnakes from "./routes/ProjSnakes";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/ProjSnakes" element={<ProjSnakes/>}/>
      </Routes>



      
        
    </div>
  );
}
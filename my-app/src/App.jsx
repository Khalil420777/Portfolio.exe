
import { Element } from 'react-scroll';
import Home from "./home/home";

const App = () => {
  return (
    <div>
  
      
      <Element name="home" className="section">
        <Home />
      </Element>

      <Element name="about" className="section">
        {/* About section content */}
      </Element>

      <Element name="projects" className="section">
        {/* Projects section content */}
      </Element>

      <Element name="contact" className="section">
        {/* Contact section content */}
      </Element>
    </div>
  );
}

export default App;
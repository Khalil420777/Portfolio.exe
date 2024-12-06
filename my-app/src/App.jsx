import Navbar from "./nav/navbar";
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      
      <Element name="home" className="section">
        {/* Home section content */}
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
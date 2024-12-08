import { Element } from 'react-scroll';
import { Box } from '@mui/material';
import Home from "./home/home";
import Aboutme from './Aboutme/aboutme';
import Skills from './Skills/skills';
import Projects from './Projects/projects';
import Contact from './Contact/contact';

const App = () => {
  return (
    <Box sx={{ 
      bgcolor: 'black',
      minHeight: '100vh',
      minWidth: '100vw',
      margin: 0,
      padding: 0,
      color: 'white'
    }}>
      <Element name="home" className="section">
        <Home />
      </Element>

      <Element name="about" className="section">
        <Aboutme/>
      </Element>

      <Element name="skills" className="section">
       <Skills/>
      </Element>

      <Element name="projects" className="section">
        <Projects/>
      </Element>

      <Element name="contact" className="section">
        <Contact/>
      </Element>
    </Box>
  );
}

export default App;
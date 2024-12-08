import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box,
  Button,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

// Custom Styles
const StyledAppBar = styled(AppBar)({
  background: 'black',
  boxShadow: 'none',
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
});

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  padding: '6px 30px',
  fontFamily: 'Lilita One',
  fontWeight: '400',
  fontSize: '1.1rem',
  '&:hover': {
    color: '#ff6b00',
    background: 'transparent',
  },
}));

const Shape = styled('div')({
  position: 'absolute',
  pointerEvents: 'none',
});

// Shapes Data
const shapes = [
  // Original shapes
  { type: 'circle', position: { top: '5%', left: '3%' }, style: { width: '15px', height: '15px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '35%', left: '5%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff0000', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { bottom: '5%', left: '4%' }, style: { width: '12px', height: '12px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'circle', position: { top: '8%', right: '4%' }, style: { width: '14px', height: '14px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '45%', right: '5%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '22px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'circle', position: { bottom: '15%', right: '3%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'circle', position: { top: '5%', left: '25%' }, style: { width: '16px', height: '16px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '3%', left: '75%' }, style: { width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'circle', position: { bottom: '5%', left: '30%' }, style: { width: '14px', height: '14px', background: '#ffaa00', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '3%', right: '35%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '24px solid #ff4400', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { top: '40%', left: '18%' }, style: { width: '10px', height: '10px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '35%', right: '20%' }, style: { width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '16px solid #ff7700', transform: 'rotate(15deg)' } },
  { type: 'circle', position: { bottom: '28%', left: '22%' }, style: { width: '12px', height: '12px', background: '#ff5500', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '32%', left: '45%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff6b00', transform: 'rotate(-25deg)' } },
  { type: 'circle', position: { bottom: '35%', right: '28%' }, style: { width: '14px', height: '14px', background: '#ff7700', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '20%', left: '88%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '24px solid #ff3300', transform: 'rotate(15deg)' } },
  { type: 'circle', position: { top: '65%', left: '8%' }, style: { width: '10px', height: '10px', background: '#ff9900', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '45%', right: '12%' }, style: { width: 0, height: 0, borderLeft: '11px solid transparent', borderRight: '11px solid transparent', borderBottom: '22px solid #ff4400', transform: 'rotate(-35deg)' } },

  // New additional shapes
  { type: 'circle', position: { top: '55%', left: '55%' }, style: { width: '12px', height: '12px', background: '#ff8800', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '25%', left: '35%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '18px solid #ff5500', transform: 'rotate(25deg)' } },
  { type: 'circle', position: { bottom: '20%', right: '55%' }, style: { width: '10px', height: '10px', background: '#ff3300', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '55%', left: '65%' }, style: { width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderBottom: '18px solid #ff6600', transform: 'rotate(-15deg)' } },
  { type: 'circle', position: { bottom: '40%', right: '65%' }, style: { width: '8px', height: '8px', background: '#ff7700', borderRadius: '50%' } },
];

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', minWidth: '100vw', margin: 0, padding: 0, color: 'white' }}>
      {/* Navbar */}
      <StyledAppBar>
        <Toolbar sx={{ justifyContent: 'center', px: 4 }}>
          <Stack direction="row" spacing={5}>
            <NavButton 
              component={ScrollLink}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </NavButton>
            <NavButton 
              component={ScrollLink}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </NavButton>
            <NavButton 
              component={ScrollLink}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </NavButton>
            <NavButton 
              component={ScrollLink}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </NavButton>
            <NavButton 
              component={ScrollLink}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </NavButton>
          </Stack>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ height: '64px' }} />

      {/* Main Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            position: 'relative',
            height: '400px',
          }}
        >
          {shapes.map((shape, index) => (
            <Shape key={index} sx={{ ...shape.position, ...shape.style }} />
          ))}

          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontFamily: 'Lilita One',
              fontSize: '3.5rem', 
              mb: 2, 
              fontWeight: '400',
              mt: 15,
            }}
          >
            Khalil Bouarrouj
          </Typography>
          <Typography 
            variant="h1" 
            component="h2"
            sx={{ 
              fontFamily: 'Lilita One',
              fontSize: '4.5rem', 
              fontWeight: '1000'
            }}
          >
            Portfolio
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

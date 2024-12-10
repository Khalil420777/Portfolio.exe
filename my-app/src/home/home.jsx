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
import { keyframes } from '@mui/system';



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

const ActionButton = styled(Button)(({ theme }) => ({
  color: 'white',
  padding: '6px 20px',
  fontFamily: 'Lilita One',
  fontWeight: '400',
  fontSize: '1rem',
  border: '2px solid #ff6b00',
  borderRadius: '25px',
  marginLeft: '20px',
  '&:hover': {
    backgroundColor: '#ff6b00',
    borderColor: '#ff6b00',
  },
}));

const float = keyframes`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-10px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Shape = styled('div')(({ index }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  animation: `
    ${index % 3 === 0 ? float : index % 3 === 1 ? pulse : spin} 
    ${3 + (index % 4)}s 
    ${index % 2 === 0 ? 'ease-in-out' : 'cubic-bezier(0.4, 0, 0.2, 1)'}
    infinite
  `,
  '&:hover': {
    animation: 'none',
    transform: 'scale(1.5)',
    transition: 'transform 0.3s ease',
  },
}));

// Shapes Data
const shapes = [
  // Original shapes
  { type: 'circle', position: { top: '5%', left: '3%' }, style: { width: '15px', height: '15px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '35%', left: '5%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff0000', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { bottom: '5%', left: '4%' }, style: { width: '12px', height: '12px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'circle', position: { top: '8%', right: '4%' }, style: { width: '14px', height: '14px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '45%', right: '5%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '22px solid #ff6b00', transform: 'rotate(5deg)' } },
  { type: 'circle', position: { bottom: '15%', right: '3%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'circle', position: { top: '5%', left: '25%' }, style: { width: '16px', height: '16px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '3%', left: '75%' }, style: { width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'circle', position: { bottom: '5%', left: '30%' }, style: { width: '14px', height: '14px', background: '#ffaa00', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '3%', right: '35%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '24px solid #ff4400', transform: 'rotate(6deg)' } },
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
        <Toolbar sx={{ px: 4, display: 'flex' }}>
          <Stack direction="row" spacing={5} sx={{ flex: 1, justifyContent: 'center' }}>
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
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </NavButton>
            <NavButton 
              component={ScrollLink}
              to="projects"
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

          {/* New Action Buttons - with margin-right */}
          <Stack direction="row" spacing={2} sx={{ mr: 8 }}>
            <ActionButton
              component={ScrollLink}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hire Me
            </ActionButton>
            <ActionButton
              component="a"
              href="/Khalil Bouarrouj en.pdf"
              download
              target="_blank"
              sx={{
                backgroundColor: '#ff6b00',
                '&:hover': {
                  backgroundColor: '#ff8533',
                }
              }}
            >
              Download CV
            </ActionButton>
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
            <Shape
              key={index}
              index={index}
              sx={{
                ...shape.position,
                ...shape.style,
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 0 2px rgba(255, 107, 0, 0.5))',
                '&:hover': {
                  filter: 'drop-shadow(0 0 8px rgba(255, 107, 0, 0.8))',
                }
              }}
            />
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

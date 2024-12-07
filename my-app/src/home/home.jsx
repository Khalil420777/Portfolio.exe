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
  fontFamily: 'Roboto, sans-serif', // Set the font family for nav buttons
  fontWeight: '600', // Match the font weight
  fontSize: '1.1rem', // Adjust font size
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
  { type: 'circle', position: { top: '20%', left: '5%' }, style: { width: '15px', height: '15px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '5%', right: '10%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff0000', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { top: '4%', left: '15%' }, style: { width: '15px', height: '15px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '50%', right: '20%' }, style: { width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '20px solid #ff6b00' } },
  { type: 'circle', position: { top: '60%', left: '25%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '10%', left: '5%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'triangle', position: { bottom: '40%', left: '2%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff6b00', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { bottom: '2%', right: '5%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },

  // Additional Shapes
  { type: 'circle', position: { top: '15%', left: '100%' }, style: { width: '14px', height: '14px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '30%', right: '10%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '22px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'circle', position: { bottom: '10%', right: '30%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '3%', left: '50%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid #ff0000', transform: 'rotate(65deg)' } },
  { type: 'circle', position: { top: '70%', left: '75%' }, style: { width: '14px', height: '14px', background: '#ff4400', borderRadius: '50%' } },

  // More Shapes
  { type: 'circle', position: { top: '80%', left: '15%' }, style: { width: '16px', height: '16px', background: '#ff4400', borderRadius: '50%' } },
  { type: 'triangle', position: { top: '75%', right: '10%' }, style: { width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #ff6b00', transform: 'rotate(45deg)' } },
  { type: 'circle', position: { top: '60%', right: '40%' }, style: { width: '12px', height: '12px', background: '#ff6b00', borderRadius: '50%' } },
  { type: 'triangle', position: { bottom: '15%', left: '35%' }, style: { width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '24px solid #ff4400', transform: 'rotate(65deg)' } },
  { type: 'triangle', position: { bottom: '20%', right: '50%' }, style: { width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '18px solid #ff6b00', transform: 'rotate(45deg)' } },
];

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', minWidth: '100vw', margin: 0, padding: 0, color: 'white' }}>
      {/* Navbar */}
      <StyledAppBar>
        <Toolbar sx={{ justifyContent: 'center', px: 4 }}>
          <Stack direction="row" spacing={5}>
            <NavButton>Home</NavButton>
            <NavButton>About Me</NavButton>
            <NavButton>Skills</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Contact</NavButton>
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
              fontFamily: 'Roboto, sans-serif', 
              fontSize: '3.5rem', 
              mb: 2, 
              fontWeight: '1000'
            }}
          >
            Khalil Bouarrouj
          </Typography>
          <Typography 
            variant="h1" 
            component="h2"
            sx={{ 
              fontFamily: 'Roboto, sans-serif', 
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

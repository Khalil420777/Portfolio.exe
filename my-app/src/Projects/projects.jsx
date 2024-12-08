import React from 'react'
import { Typography, Box, Grid } from '@mui/material'

const Projects = () => {
  return (
    <Box sx={{ padding: '20px', mt: 8 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 3,
        mt: 15
      }}>
        <Box sx={{ 
          width: '30px', 
          height: '30px', 
          borderRadius: '50%', 
          backgroundColor: 'yellow',
          mr: 2 
        }} />
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'Lilita One',
            color: 'white'
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 4,
            pl: 8,
            mt: 3 
          }}>
            {/* Story Project */}
            <Box>
              <Typography 
                sx={{ 
                  color: 'white',
                  mb: 2,
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  fontFamily: 'Lilita One'
                }}
              >
                "My Story" Project
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Box 
                  component="a"
                  href="https://github.com/projectSenior1/storytelling"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Box 
                    component="img" 
                    src="/story.jpg"
                    alt="story project"
                    sx={{
                      width: '200%',
                      height: '430px',
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  /> 
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    lineHeight: 1.7,
                    position: 'absolute',
                    left: '950px',
                    width: '400px',
                    top:'18+0px',
                    textAlign: 'justify'
                  }}
                >
                  • Built an interactive storytelling platform using <span style={{ color: '#FFD700', fontWeight: 'bold' }}>React</span> and <span style={{ color: '#68A063', fontWeight: 'bold' }}>Node.js</span> with <span style={{ color: '#00758F', fontWeight: 'bold' }}>MySQL</span> database
                  <br /> • Created a space where users can write, publish, and share their original stories
                  <br /> • Implemented a dynamic commenting system for reader engagement and feedback
                  <br /> • Added user authentication <span style={{ color: '#FF4D00', fontWeight: 'bold' }}>JWT</span> for secure account management
                  <br /> • Integrated story categories and search functionality for easy navigation
                  <br /> • Developed a responsive interface for seamless reading experience across devices
                  <br />
                  <br />
                  <a 
                    href="https://github.com/projectSenior1/storytelling" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: '#4078c0',  // GitHub blue color
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    GitHub Repository →
                  </a>
                </Typography>
              </Box>
            </Box>
            
           
            <Box sx={{ 
              display: 'flex', 
              gap: 60,
              mt: 4
            }}>
              {/* Ween Project */}
              <Box>
                <Typography 
                  sx={{ 
                    color: 'white',
                    mb: 2,
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    fontFamily: 'Lilita One'
                  }}
                >
                 "Ween" Project
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* Ween Project Images */}
<Box
  component="a"
  href="https://github.com/Theases-App/ween-app"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    display: 'block',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    mr: 5,  // Add margin-right for spacing
  }}
>
  <Box
    component="img"
    src="/theses.jpg"
    alt="ween project"
    sx={{
        width: '300%',
        height: '400px',
      objectFit: 'cover',
      borderRadius: 2,
    }}
  />
</Box>

<Box
  component="a"
  href="https://github.com/Theases-App/ween-app"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    display: 'block',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    mr: 4,  // Add margin-right for spacing
  }}
>
  <Box
    component="img"
    src="/event.jpg"
    alt="event feature"
    sx={{
        width: '300%',
        height: '400px',
      objectFit: 'cover',
      borderRadius: 2,
    }}
  />
</Box>

<Box
  component="a"
  href="https://github.com/Theases-App/ween-app"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    display: 'block',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  }}
>
  <Box
    component="img"
    src="/notif.jpg"
    alt="notification feature"
    sx={{
        width: '300%',
        height: '400px',
      objectFit: 'cover',
      borderRadius: 2,
    }}
  />
</Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      lineHeight: 1.7,
                      position: 'absolute',
                      left: '950px',
                      width: '400px',
                      top:'2700px',
                      textAlign: 'justify'
                    }}
                  >
                    • Developed <span style={{ color: '#FF4D00', fontWeight: 'bold' }}>Ween</span>, an e-booking event mobile application using <span style={{ color: '#61DBFB', fontWeight: 'bold' }}>React Native</span> for the frontend and <span style={{ color: '#68A063', fontWeight: 'bold' }}>Node.js</span> with <span style={{ color: '#00758F', fontWeight: 'bold' }}>MySQL</span> database
                    <br /> • Implemented <span style={{ color: '#FF4D00', fontWeight: 'bold' }}>JWT</span> authentication system for secure user access
                    <br /> • Designed and implemented event display feature allowing users to save favorites
                    <br /> • Integrated <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Flousi API</span> for seamless payment processing
                    <br /> • Enabled booking events for specific dates with notification alerts for new events
                    <br />
                    <br />
                    <a 
                      href="https://github.com/Theases-App/ween-app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: '#4078c0',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      GitHub Repository →
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              gap: 60,
              mt: 4
            }}>
              {/* Flutter Project */}
              <Box>
                <Typography 
                  sx={{ 
                    color: 'white',
                    mb: 2,
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    fontFamily: 'Lilita One'
                  }}
                >
                  "My personal FrontEnd food recipe app" Project
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Box
                    component="a"
                    href="https://github.com/Khalil420777/Recipe-App-Front-end-"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'block',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                      mr: 0.5,
                    }}
                  >
                    <Box
                      component="img"
                      src="/flutter project.png"  
                      alt="flutter project"
                      sx={{
                        width: '120%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <Box
                    component="a"
                    href="https://github.com/Khalil420777/Recipe-App-Front-end-"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'block',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/flutter project 2.jpg"  // Replace with your image path
                      alt="flutter feature"
                      sx={{
                        width: '120%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      lineHeight: 1.7,
                      position: 'absolute',
                      left: '950px',
                      width: '400px',
                      top: '3280px',
                      textAlign: 'justify'
                    }}
                  >
                    • First exploration into mobile development using <span style={{ color: '#61DBFB', fontWeight: 'bold' }}>Flutter</span> and <span style={{ color: '#0553B1', fontWeight: 'bold' }}>Dart</span>
                    <br /> • Designed and implemented a user-friendly recipe browsing interface
                    <br /> • Created custom animations for smooth transitions between screens
                    <br /> • Implemented local storage for saving favorite recipes
                    <br /> • Built responsive layouts that adapt to different screen sizes
                    <br /> • Gained valuable experience with Flutter widgets and state management
                    <br />
                    <br />
                    <a 
                      href="https://github.com/Khalil420777/Recipe-App-Front-end-"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: '#4078c0',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      GitHub Repository →
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects

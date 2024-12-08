import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material'


const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: 480,
          left: -40,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#ff0000',
          opacity: 0.8,
          
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '30%',
          width: 0,
          height: 0,
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: '40px solid #ff6b00',
          transform: 'rotate(80deg)scale(0.7) ',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          width: 0,
          height: 0,
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: '40px solid #ff0000',
          transform: 'rotate(45deg)scale(0.7)',
        }}
      />

      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          mb: 4,
          color: 'white',
          fontWeight: '400',
          fontFamily: 'Lilita One',
          fontSize: '3.5rem',
         
        }}
      >
        About me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/bettta.jpg"
            alt="Profile illustration"
            sx={{
              width: '100%',
              maxWidth: 300,
              height: 'auto',
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white',
              lineHeight: 1.7,
              textAlign: 'justify',
              mt:6
            }}
          >
        I’m Khalil Bouarrouj, a passionate developer from Tunisia with a diverse skill set in both mobile and web development. I hold a Baccalaureate in Economy and Management and have studied software development at RebootKamp for 6 months. During my 3-month internship at AppAxis Innovation, I worked on a web development project where I learned and gained valuable experience. My journey in development has been fueled by a curiosity for technology and a drive to create intuitive, user-friendly applications.

I specialize in building web and mobile applications, with a focus on delivering clean, efficient code and seamless user experiences. Whether it's developing a website or crafting a mobile app, I take pride in my work, always looking for ways to improve my skills and stay updated with the latest tech trends.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutMe
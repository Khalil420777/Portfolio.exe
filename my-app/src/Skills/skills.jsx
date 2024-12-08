import React from 'react'
import { Box, Typography } from '@mui/material'

const Skills = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ 
          width: '30px', 
          height: '30px', 
          borderRadius: '50%', 
          backgroundColor: '#FF4D00',
          
          mr: 2 
        }} />
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'Lilita One',
            color: 'white'
          }}
        >
          Skills
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
     
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '20px',
          flex: 1
        }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 700, color: '#000' }}>
            Frontend Development
          </Typography>
          <Typography sx={{ mb: 3, textAlign: 'center', color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>
            Building responsive and interactive user interfaces with modern web technologies. Specializing in creating seamless user experiences through clean, efficient code and innovative design solutions. Proficient in implementing responsive layouts and dynamic interfaces.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Box component="img" src="/react.png" alt="React" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/reactnative.png" alt="react native" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/nextjs.svg" alt="Next.js" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/html-5.png" alt="HTML5" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/css-3.png" alt="CSS3" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/material-ui.svg" alt="Material UI" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/tailwind.png" alt="Tailwind" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/bootstrap.png" alt="Bootstrap" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/handlebarsjs-icon.svg" alt="Handlebars" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/flutter.png" alt="Flutter" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
          </Box>
        </Box>

       
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '20px',
          flex: 1
        }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 700, color: '#000' }}>
            Backend Development
          </Typography>
          <Typography sx={{ mb: 3, textAlign: 'center', color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>
            Creating robust server-side applications and APIs with a focus on performance and scalability. Experienced in developing secure database architectures, RESTful APIs, and implementing efficient server-side logic for optimal application performance.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Box component="img" src="/node-js.png" alt="Node.js" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="puppeter.png" alt="Puppeteer" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="php.png" alt="PHP" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/mysql.png" alt="MySQL" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/mongodb.png" alt="MongoDB" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            <Box component="img" src="/Sequelize.png" alt="Sequelize" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
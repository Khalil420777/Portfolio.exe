import React from 'react'
import { Box, Typography ,Tooltip} from '@mui/material'

const Skills = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 ,mt:15}}>
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
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              textAlign: 'center', 
              fontWeight: 700, 
              color: '#000',
              fontFamily: 'Lilita One'
            }}
          >
            Frontend Development
          </Typography>
          <Typography 
            sx={{ 
              mb: 3, 
              textAlign: 'center', 
              color: '#333', 
              fontSize: '1rem', 
              lineHeight: 1.6,
              fontFamily: 'Lilita One'
            }}
          >
            Building responsive and interactive user interfaces with modern web technologies. Specializing in creating seamless user experiences through clean, efficient code and innovative design solutions Proficient in implementing responsive layouts and dynamic interfaces.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Tooltip title="React" arrow>
              <Box component="img" src="/react.png" alt="React" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="React Native" arrow>
              <Box component="img" src="/reactnative.png" alt="React Native" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Next.js" arrow>
              <Box component="img" src="/nextjs.svg" alt="Next.js" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="HTML5" arrow>
              <Box component="img" src="/html-5.png" alt="HTML5" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="CSS3" arrow>
              <Box component="img" src="/css-3.png" alt="CSS3" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Material UI" arrow>
              <Box component="img" src="/material-ui.svg" alt="Material UI" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Tailwind CSS" arrow>
              <Box component="img" src="/tailwind.png" alt="Tailwind" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Bootstrap" arrow>
              <Box component="img" src="/bootstrap.png" alt="Bootstrap" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Handlebars" arrow>
              <Box component="img" src="/handlebarsjs-icon.svg" alt="Handlebars" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
            <Tooltip title="Flutter" arrow>
              <Box component="img" src="/flutter.png" alt="Flutter" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
            </Tooltip>
          </Box>
        </Box>

       
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '20px',
          flex: 1
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              textAlign: 'center', 
              fontWeight: 700, 
              color: '#000',
              fontFamily: 'Lilita One'
            }}
          >
            Backend Development
          </Typography>
          <Typography 
            sx={{ 
              mb: 3, 
              textAlign: 'justify', 
              color: '#333', 
              fontSize: '1rem', 
              lineHeight: 2,
              fontFamily: 'Lilita One'
            }}
          >
            Creating robust server-side applications and APIs with a focus on performance and scalability. Experienced in developing secure database architectures, RESTful APIs, and implementing efficient server-side logic for optimal application performance.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
  <Tooltip title="Node.js" arrow>
    <Box component="img" src="/node-js.png" alt="Node.js" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
  <Tooltip title="Puppeteer" arrow>
    <Box component="img" src="puppeter.png" alt="Puppeteer" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
  <Tooltip title="PHP" arrow>
    <Box component="img" src="php.png" alt="PHP" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
  <Tooltip title="MySQL" arrow>
    <Box component="img" src="/mysql.png" alt="MySQL" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
  <Tooltip title="MongoDB" arrow>
    <Box component="img" src="/mongodb.png" alt="MongoDB" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
  <Tooltip title="Sequelize" arrow>
    <Box component="img" src="/Sequelize.png" alt="Sequelize" sx={{ width: 50, height: 50, objectFit: 'contain' }} />
  </Tooltip>
</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
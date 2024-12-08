import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button,
  Stack,
  IconButton,
  Tooltip,
  Alert,
  Snackbar
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 4,
        pt: 15
      }}
    >
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: '1px solid #333',
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 'bold',mb:4,fontFamily:'lilita one' }}
          >
           Message Me
          </Typography>

          <Stack spacing={3}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                sx: { 
                  color: 'white',
                  '&:before': { borderBottomColor: '#333' },
                  '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#666' },
                }
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                sx: { 
                  color: 'white',
                  '&:before': { borderBottomColor: '#333' },
                  '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#666' },
                }
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Your message..."
              multiline
              rows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              InputProps={{
                sx: { 
                  color: 'white',
                }
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button 
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{ 
                  bgcolor: '#ff6b00',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  '&:hover': {
                    bgcolor: '#ff8533'
                  }
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Box 
        component="footer" 
        sx={{ 
          mt: 4,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack 
          direction="row" 
          spacing={3}
          sx={{
            '& .MuiIconButton-root': {
              color: 'white',
              '&:hover': { opacity: 0.7 }
            }
          }}
        >
          <Tooltip title="GitHub" arrow placement="top">
            <IconButton href="https://github.com/Khalil420777" target="_blank">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="LinkedIn" arrow placement="top">
            <IconButton href="https://www.linkedin.com/in/khalil-bouarrouj-ab58902bb/" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Gmail" arrow placement="top">
            <IconButton href="bouarroujkhalil@gmail.com" target="_blank">
              <GoogleIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Discord" arrow placement="top">
            <IconButton href="https://discordapp.com/users/khalil2319.com" target="_blank">
              <Box
                component="img"
                src="/discord.png"
                alt="Discord"
                sx={{ 
                  width: 24,
                  height: 30,
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Instagram" arrow placement="top">
            <IconButton href="https://www.instagram.com/khalil_bouarrouj/" target="_blank">
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Facebook" arrow placement="top">
            <IconButton href="https://www.facebook.com/profile.php?id=100007577478945" target="_blank">
              <FacebookIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
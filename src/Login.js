import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.



export default function LogIn() {

    const defaultTheme = createTheme();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    // const submitForm=()=>{
    //     console.log(email + ''+ password );
    // }


    const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
//   function handleClick() {
//     alert('You clicked me!');
//   }

const submitForm = async () => {
    console.log(email + ''+ password );
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        // Handle response data (e.g., save token to local storage)
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div className='container'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
              <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
        
          <Box component="form" onSubmit={submitForm} onSubmit={handleSubmit}noValidate sx={{ mt: 1 }} >
            <TextField onChange={e=>setEmail(e.target.value)}
              variant="outlined" 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField onChange={e=>setPassword(e.target.value) }
              variant="outlined" 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             LOGIN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  onClick={() => navigate("/Registration")} >
                  SignUp
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"forgot your password"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </div>
  );
}
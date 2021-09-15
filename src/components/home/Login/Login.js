import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { TextField } from 'mui-rff';
import React from 'react';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit = () => {

  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12}></Grid>
        <Grid item md={5} sm={12}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <TextField
                      name="email_address"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10} container justifyContent="flex-start">
                    <TextField
                      name="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                    />
                    <Box>
                      <Link to="/forgot-password">
                      <Typography variant="overline" color="primary">
                        {"Forgot Password?"}
                      </Typography>
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Button variant="outlined" color="primary" fullWidth>Login</Button>

                    <Box>
                      <Typography variant="overline">
                        {"Don’t have an account yet? "}
                        <Link to="/sign-up">Sign Up</Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
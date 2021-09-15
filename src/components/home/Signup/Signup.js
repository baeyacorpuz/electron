import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-final-form';

const Signup = () => {
   const onSubmit = () => {

  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12}></Grid>
        <Grid item md={5}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={8}>

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

export default Signup;
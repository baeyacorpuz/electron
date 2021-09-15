import { AppBar, Grid, IconButton, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgba(255, 255, 255, 0.2) !important",
    backdropFilter: "blur(5px)",
    minHeight: 80,
    '&.MuiAppBar-root': {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      alignContent: "center"
    },
    padding: theme.spacing(2)
  }
}))

const Navbar = ({ handleDrawerToggle }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <IconButton
        edge="start"
        onClick={handleDrawerToggle}
      >
        <Menu />
      </IconButton>
      <Grid container>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Navbar;
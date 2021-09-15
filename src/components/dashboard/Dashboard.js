import React, { Fragment, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';

const Dashboard = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <div>
        <CssBaseline />
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        <Navbar handleDrawerToggle={handleDrawerToggle} />
      </div>

      <div className="content">
        <Switch>

        </Switch>
      </div>
    </Fragment>
  );
}

export default Dashboard;
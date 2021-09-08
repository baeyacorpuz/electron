import React, { Fragment, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const Dashboard = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <CssBaseline />
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      
      <div className="content">
        <Switch>
          
        </Switch>
      </div>
    </Fragment>
  );
}
 
export default Dashboard;
import { Drawer, Hidden } from '@material-ui/core';
import React from 'react';

const Sidebar = ({ open, handleDrawerToggle }) => {
  return (
    <div>
      <Hidden>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
        >
          
        </Drawer>
      </Hidden>
    </div>
  );
}
 
export default Sidebar;
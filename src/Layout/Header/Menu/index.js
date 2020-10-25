import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, ListItemText, IconButton, ListItemIcon } from '@material-ui/core';
import { Collections as CollectionsIcon, Menu as MenuIcon, Build as BuildIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory()
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = pathname => {
    history.push(pathname);
    handleClose();
  }

  return (
    <>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon 
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            />
        </IconButton>

        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >   
          <MenuItem onClick={() => handleMenuItemClick('/')}>
              <ListItemIcon>
                  <CollectionsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Layouts" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/configurations')}>
              <ListItemIcon>
                  <BuildIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Configurations" />
          </MenuItem>
        </Menu>
    </>
  );
};

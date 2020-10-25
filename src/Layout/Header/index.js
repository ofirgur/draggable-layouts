import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { selectTitle } from '../../redux/appSlice';

import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const title = useSelector(selectTitle)

  return (
    <AppBar position="static">
      <Toolbar>
        <Menu />
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:300,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  progress:{
    margin:'0 auto',
  }
}));

export default function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  );
}
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  paper: {
    padding: 8,
    margin: '5px 0',
  },
  breadCrumb:{
    padding:2
  }
}));

export default function IconBreadcrumbs({currentPage='About'}) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
      
      <Link color="inherit" to='/'>
        Home
      </Link>
      <div color="textPrimary" aria-current="page">
       {currentPage} 
      </div>
    </Breadcrumbs>
    </Paper>
  );
}
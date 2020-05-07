import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:8
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Container fixed>
                <Typography component="div" />
                <Paper >
                    <Grid spacing={2}>
                        Who Developed this website?
                            Name : Vikas
                            You can email me at coronaviruswebsite@gmail.com.
    You can find my LinkedIn here.
                    </Grid>
                    <Grid >
                        Sources
    Local government websites/health departments
    covid19india
    ncov2019
    WHO
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

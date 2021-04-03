import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
// import { MTable } from './MTable';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: '10px auto',
    maxWidth: 500,
  },
  cardContent: {
    padding: '0 18px'
  }
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <IconBreadcrumbs/> */}
      {/* <MTable/> */}
      <Container fixed>
        <Grid>
          <Paper className={classes.paper}>
            <Card variant="outlined">
              <Grid container>
                <Grid><PersonOutlineTwoToneIcon style={{ fontSize: '300%', color: '#3f51b5' }} /></Grid>
                <Grid><CardHeader title={`About`} /></Grid>
              </Grid>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.title} color="textSecondary">
                  Who Developed this website?
        </Typography>
                <Typography variant="subtitle1" >Vikas Kumar</Typography>
                <Typography variant="subtitle1">You can email me at : thecodevik@gmail.com</Typography>
              </CardContent>
              <Grid container>
                <Grid sm={4} items>
                  <CardActions>
                    <a target='_blank' href='https://vikas62081.github.io/newTodos/'><Button size="small"> Todo App</Button></a>
                  </CardActions>
                </Grid><Grid sm={8} items>
                  <CardActions>
                    <a target='_blank' href='https://www.linkedin.com/in/vikas-kumar-vishwakarma-895248172/'><Button size="small"> You can find me here LinkedIn</Button></a>
                  </CardActions>
                </Grid>
              </Grid>


            </Card>
            {/* <Typography>About</Typography>
            <Typography variant="h5" gutterBottom>Who Developed this website?</Typography>
            <Typography variant="h6" gutterBottom>Vikas Kumar</Typography> */}

          </Paper>
        </Grid>
        <Grid>

          <Paper className={classes.paper}>
            <Card variant="outlined">
              <Grid container>
                <Grid><AcUnitRoundedIcon style={{ fontSize: '300%', color: '#3f51b5' }} /></Grid>
                <Grid><CardHeader title={`Sources`} /></Grid>
              </Grid>
              <CardContent className={classes.cardContent}>
                {/* <Typography className={classes.title} color="textSecondary">
                  Who Developed this website?
        </Typography>  */}
                <Typography variant="subtitle1" >covid19india</Typography>
                <Typography variant="subtitle1" >ncov2019</Typography>
                <Typography variant="subtitle1">WHO</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

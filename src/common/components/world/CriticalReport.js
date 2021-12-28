import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    h4: {
        fontSize: '175%',
        fontWeight: "bold"
    },
    paper: {
        textAlign: 'center',
        borderRadius: 3,
        backgroundColor: '#8f1b97',
    },
    text: {
        fontWeight: "bold",
        fontSize: '100%',
        color: "#fff",
        fontFamily: 'sans-serif',
    },
}));
function CriticalReport({ data, title }) {
    const classes = useStyles();
    return (
        <Grid container spacing={1} style={{ marginBottom: 2 }}>
            <Grid sm={3} xs={12} item>
                <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.h4} style={{ color: "rgb(248, 245, 64)" }}>
                        <NumberFormat value={data.critical} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text} >
                        Criticals
                    </Typography>
                </Paper>
            </Grid>
            <Grid sm={3} xs={12} item>
                <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.h4} style={{ color: "#65dd9b" }}>
                        <NumberFormat value={data.affectedCountries} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text}>
                        Affected Countries
                    </Typography>
                </Paper>
            </Grid>
            <Grid sm={3} xs={6} item>
                <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.h4} style={{ color: "rgb(248, 245, 64)" }}>
                        <NumberFormat value={data.casesPerOneMillion} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text}>
                        Cases / Million
                    </Typography>
                </Paper>
            </Grid>
            <Grid sm={3} xs={6} item>
                <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.h4} style={{ color: "#65dd9b" }}>
                        <NumberFormat value={data.deathsPerOneMillion} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text}>
                        Deaths / Million
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CriticalReport;

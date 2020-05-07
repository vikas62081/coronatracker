import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux'
import TotalReport from '../totalReport/TotalReport';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundColor:"#2ca7fd"
        backgroundColor: "#397bbf"
    },
    container: {
        width: '100%',
        margin: 0
    },
    h4: {
        fontSize: 50,
        fontWeight: "bold"
    },
    marginBottom: {
        paddingBottom: 16
    },
    text: {
        fontWeight: "bolder",
        fontSize: 24
    }
}));
function WorldReport() {
    const classes = useStyles();
    const WolrdTotalData = useSelector((state) => state.worldTotalReport);
    return (
        <div className={classes.root}>
            <Grid item>
                    <Paper className={classes.paper}>
                        {WolrdTotalData&& <TotalReport data={WolrdTotalData}
                         title={`World Quick Facts`}/>}
                    </Paper>
                </Grid>
            
        </div>
    )
}

export default WorldReport

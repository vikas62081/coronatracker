import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableTracker from '../components/tableTracker/TableTracker';
import TableTracker2 from '../components/tableTracker/TableTracker2';
import { getDataFromAPI } from '../actions/dataActions'
import { useDispatch, useSelector } from 'react-redux'
import TotalRprt from '../components/totalReport/TotalRprt';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundColor:"#2ca7fd"
        backgroundColor:"#397bbf"
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

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.stateWiseReport);
    const totalData = useSelector((state) => state.totalReport);
    const userData=useSelector((state) => state.savedByUser);
    useEffect(() => {
        getDataFromAPI(dispatch);
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={1} direction="row"
             justify="flex-start" alignItems="stretch">
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>
                        {totalData && <TotalRprt data={totalData} />}
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        {/* {tableData && <TableTracker rows={tableData} />} */}
                        {userData &&userData.length>0&& <TableTracker2 rows={userData}/>}
                        {tableData && <TableTracker2 rows={tableData} dispatch={dispatch} />}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import TableTracker from '../components/tableTracker/TableTracker';
import DailyGraph from '../components/graphs/dailyReport/DailyGraph';
import TotalGraph from '../components/graphs/totalGraph/TotalGraph';
import Progress from '../components/progress/Progress'
// import {getDataFromAPI} from '../actions/dataActions'
import {useDispatch,useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    margin: 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Combine() {
  const classes = useStyles();
  const rows = useSelector((state)=>state.dailyReport);
  // const tableData = useSelector((state)=>state.stateWiseReport);

  return (
    
    <div className={classes.root}>
      {rows.length?<Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {rows && <DailyGraph rows={rows} />}
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {tableData && <TableTracker rows={tableData} />}
          </Paper>
        </Grid> */}
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          {rows && <TotalGraph rows={rows} />}
          </Paper>
        </Grid>
      </Grid>:<Progress/>}
    </div>
  );
}

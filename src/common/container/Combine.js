import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableTracker from '../components/tableTracker/TableTracker';
import DailyGraph from '../components/graphs/dailyReport/DailyGraph';
import TotalGraph from '../components/graphs/totalGraph/TotalGraph';
import Axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Combine() {
  const classes = useStyles();
  const [rows, setRows] = useState(null);
  const [tableData, setTableData] = useState(null);
  useEffect(() => {
    Axios.get('https://api.covid19india.org/data.json')
      .then((response) => {
          console.log(response.data)
        setTableData(response.data.statewise);
        const d = response.data.cases_time_series.map(data => {
          return {
            ...data,
            dailyconfirmed: parseInt(data.dailyconfirmed, 10),
            dailydeceased: parseInt(data.dailydeceased, 10),
            dailyrecovered: parseInt(data.dailyrecovered, 10),
            totalconfirmed: parseInt(data.totalconfirmed, 10),
            totaldeceased: parseInt(data.totaldeceased, 10),
            totalrecovered: parseInt(data.totalrecovered, 10)
          }
        })
        setRows(d)
      })
  }, [])
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}  >
          <Paper className={classes.paper}>
            {rows && <DailyGraph rows={rows} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {tableData && <TableTracker rows={tableData} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {rows && <TotalGraph rows={rows} />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

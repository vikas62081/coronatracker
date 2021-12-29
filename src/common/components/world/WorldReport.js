import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux'
import TotalReport from '../totalReport/TotalReport';
import CriticalReport from './CriticalReport'
import WorldTable from './WorldTable';
import Progress from '../progress/Progress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor:"#2ca7fd"
    backgroundColor: "#f1f1f1"
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
  },
  title: {
    flex: '1 1 100%',
    fontSize: '150%',
    fontWeight: 600,
    letterSpacing: '0.095em',
    textDecoration: 'underline',
    color: 'rgba(0, 0, 0, 0.87)'
  },
}));

function WorldReport() {
  const classes = useStyles();
  const [tableData, setTableData] = useState(null)
  const WolrdTotalData = useSelector((state) => state.worldTotalReport);
  let data = []
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res => res.json())
      .then(res => {
        setTableData(res)
      })
  }, [])

  return (
    <div className={classes.root}>
      {/* <SimpleSnackbar open={open} close={handleClose} isDataAdded={isDataAdded} /> */}
      {tableData ? <Grid container spacing={1} direction="row"
        justify="flex-start" alignItems="stretch" className={classes.container}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={classes.paper}>
            {WolrdTotalData && <TotalReport data={WolrdTotalData}
              title={`World Quick Facts`} />}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <CriticalReport data={WolrdTotalData} />
            <WorldTable rows={tableData} />
          </Paper>
        </Grid>
      </Grid> : <Progress />
      }
    </div>
  )
}

export default WorldReport

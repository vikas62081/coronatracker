import React from 'react'
import DistTableTracker from '../components/tableTracker/DistTableTracker'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 
import {ZoneGraph} from '../components/graphs/zoneGraph/ZoneGraph'
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
function District(props) {
    const classes = useStyles();
    const { state } = props.match.params
    const allStateDistrict = useSelector((state) => state.districtWiseReport)
    const zones = useSelector((state) => state.stateZone)
    const requestedState = allStateDistrict.filter(st => st.state === state)
    const {districtData} =requestedState[0]
    const requestedStateZoneInfo=zones.filter(st=>st.state===state)
    const stateDateWithZone=districtData.map(dist=>{
        let zone='Unknown';
        requestedStateZoneInfo.map(z=>{
            if(z.district===dist.district){
                 zone=z.zone
            }
        })
        return{...dist,zone:zone }
    })
    return (
        <div className={classes.root}>
        <Grid container>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
          <DistTableTracker rows={stateDateWithZone} stateName={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <ZoneGraph state={requestedStateZoneInfo} stateName={state}/>
          </Paper>
        </Grid>
      </Grid>
      </div>
    )
}

export default District

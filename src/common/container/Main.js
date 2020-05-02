import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import TableTracker from '../components/tableTracker/TableTracker';
import TableTracker2 from '../components/tableTracker/TableTracker2';
import { useDispatch, useSelector } from 'react-redux'
import TotalReport from '../components/totalReport/TotalReport';
import {addRowToSaveUser} from '../actions/reducerActions'
import SimpleSnackbar from '../components/alert/SimpleSnackbar';
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
    container:{
width:'100%',
margin:0
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

export default function Main() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const tableData = useSelector((state) => state.stateWiseReport);
    const totalData = useSelector((state) => state.totalReport);
    // const userData=useSelector((state) => state.savedByUser);
    const [userData, setUserData] = useState(()=>{
       const local=localStorage.getItem('userFav')
       return local?JSON.parse(local):[]
    })
    useEffect(() => {
        setOpen(true);
        setUserData(tableData.filter(data => data.status))
        localStorage.setItem('userFav',JSON.stringify(userData))
        dispatch(addRowToSaveUser(dispatch,userData))
    }, [tableData])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    return (
        <div className={classes.root}>
            <SimpleSnackbar open={open} close={handleClose}/>
            <Grid container spacing={1} direction="row"
                justify="flex-start" alignItems="stretch" className={classes.container}>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>
                        {totalData && <TotalReport data={totalData} />}
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        {/* {tableData && <TableTracker rows={tableData} />} */}
                        {userData && userData.length > 0 && <TableTracker2 rows={userData} dispatch={dispatch} title='Saved' />}
                        {tableData && <TableTracker2 rows={tableData} dispatch={dispatch} />}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
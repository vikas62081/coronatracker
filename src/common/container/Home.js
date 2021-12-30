import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import TableTracker from '../components/tableTracker/TableTracker';
import TableTracker2 from '../components/tableTracker/TableTracker2';
import { useDispatch, useSelector } from 'react-redux'
import TotalReport from '../components/totalReport/TotalReport';
import { addRowToSaveUser } from '../actions/reducerActions'
// import SimpleSnackbar from '../components/alert/SimpleSnackbar';
import Progress from '../components/progress/Progress'
import VaccineReport from '../components/vaccine/vaccineReport';
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundColor:"#2ca7fd"
        backgroundColor: "#f9f9f9"
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

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const tableData = useSelector((state) => state.stateWiseReport);
    const totalData = useSelector((state) => state.totalReport);
    const vaccineData = useSelector(state => state.vaccine)
    // const userData=useSelector((state) => state.savedByUser);
    const [userData, setUserData] = useState()
    const [lenghtOfUserData, setLenghtOfUserData] = useState(0)
    const [isDataAdded, setIsDataAdded] = useState(false)
    useEffect(() => {
        setOpen(true);
        const userSavedData = tableData.filter(data => data.status)
        lenghtOfUserData < userSavedData.length ? setIsDataAdded(true) : setIsDataAdded(false)
        setLenghtOfUserData(userSavedData.length)
        dispatch(addRowToSaveUser(dispatch, userSavedData))
        setUserData(userSavedData)
        setTimeout(() => {
            const savedStateCode = userSavedData.map(dt => { return dt.statecode })
            localStorage.setItem('userFav', JSON.stringify(savedStateCode))
        }, 200);
    }, [tableData])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <div className={classes.root}>

            {/* <SimpleSnackbar open={open} close={handleClose} isDataAdded={isDataAdded} /> */}
            {tableData.length ? <Grid container spacing={1} direction="row"
                justify="flex-start" alignItems="stretch" className={classes.container}>
                <Grid item sm={3} xs={12}>
                    <Paper className={classes.paper}>
                        {totalData && <TotalReport data={totalData} />}
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        {vaccineData ? <VaccineReport data={vaccineData} /> : <Progress />}
                        {/* {tableData && <TableTracker rows={tableData} />} */}

                    </Paper>
                </Grid>

            </Grid> : <Progress />}
            <Paper className={classes.paper}>
                {userData && userData.length ?
                    <TableTracker2 rows={userData} dispatch={dispatch} title='WATCHLIST' /> : null}
                {tableData && <TableTracker2 rows={tableData} dispatch={dispatch} />}
            </Paper>

        </div>
    );
}
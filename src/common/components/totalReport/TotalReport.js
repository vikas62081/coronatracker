import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import * as moment from "moment/moment.js"
const useStyles = makeStyles((theme) => ({
    h4: {
        fontSize: 50,
        fontWeight: "bold"
    },
    marginBottom: {
        paddingBottom: 20,
        marginBottom:2,
        borderRadius:3,
        backgroundColor:'#3574b5'
    },
    text: {
        fontWeight: "bold",
        fontSize: 24,
        color: "rgb(239, 239, 247)"
    },
    daily: {
        fontSize: '50%'
    }
    ,
}));
function TotalReport({ data,title }) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h3" className={classes.h4} style={{ color: "rgb(239, 239, 247)" }}>
                {title===undefined?'Quick Facts':title}
        </Typography>
            <Typography variant="overline" display="block" gutterBottom
                style={{ color: "rgb(239, 239, 247)" }}>
                updated : {moment(data.lastupdatedtime,'DD-MM-YYYY HH:mm:ss').fromNow()}
        </Typography> 
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "rgb(53, 197, 212)" }}>
                    <NumberFormat value={data.confirmed} displayType={'text'} thousandSeparator={true} />
                    <span className={classes.daily}>
                        (+<NumberFormat value={data.deltaconfirmed} displayType={'text'}
                            thousandSeparator={true} />)
            </span>
                </Typography>
                <Typography variant="subtitle1" className={classes.text} >
                    Total Confirmed
            </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#f65164" }}>
                    <NumberFormat value={data.deaths} displayType={'text'} thousandSeparator={true} />
                    <span className={classes.daily}>
                        (+<NumberFormat value={data.deltadeaths} displayType={'text'} thousandSeparator={true} />)
                   </span>
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Deceased
            </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#f8f540" }}>
                    <NumberFormat value={data.active} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Active
            </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#65dd9b" }}>
                    <NumberFormat value={data.recovered} displayType={'text'} thousandSeparator={true} />
                    <span className={classes.daily}>
                        (+<NumberFormat value={data.deltarecovered} displayType={'text'} thousandSeparator={true} />)</span>
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Recovered
            </Typography>

            </div>
        </div> 
    )
}

export default TotalReport;

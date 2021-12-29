import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import * as moment from "moment/moment.js"
const useStyles = makeStyles((theme) => ({
    h4: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black"
    },
    marginBottom: {
        paddingBottom: 5,
        marginBottom: 2,
        borderRadius: 3,
        backgroundColor: '#3f50b5',
        borderRadius: 15
    },
    text: {
        fontWeight: "bold",
        fontSize: 24,
        color: "rgb(239, 239, 247)"
    },
    daily: {
        // fontSize: '50%'
        fontSize: '120%',
        fontWeight: 500,
        color: '#35c5d4'
    }
    , percent: {
        color: '#f2f2f2',
        fontSize: '130%',
        fontWeight: 600

    }, cnf: {
        fontSize: '120%',
        fontWeight: 500,
        color: '#35c5d4'
    }
}));
function TotalReport({ data, title }) {
    const classes = useStyles();
    const { lastupdatedtime,
        confirmed, deltaconfirmed,
        deaths, deltadeaths,
        recovered, deltarecovered,
        active, } = data
    return (
        <div>
            <Typography variant="h3" className={classes.h4}>
                {title === undefined ? 'Quick Facts' : title}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom
            >
                updated : {moment(lastupdatedtime, 'DD-MM-YYYY HH:mm:ss').fromNow()}
            </Typography>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "rgb(53, 197, 212)" }}>
                    <NumberFormat value={confirmed} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <span className={classes.cnf}>
                    (+<NumberFormat value={deltaconfirmed} displayType={'text'}
                        thousandSeparator={true} />)
                </span>
                <Typography variant="subtitle1" className={classes.text} >
                    Total Confirmed
                </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#f65164" }}>
                    <NumberFormat value={deaths} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <span className={classes.daily}>
                    (+<NumberFormat value={deltadeaths} displayType={'text'} thousandSeparator={true} />)
                </span>

                <div className={classes.percent}>
                    {'[' + ((deaths * 100) / confirmed).toFixed(2) + '%]'}
                </div>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Deceased
                </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#f8f540" }}>
                    <NumberFormat value={active} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <div className={classes.percent}>
                    {'[' + ((active * 100) / confirmed).toFixed(2) + '%]'}
                </div>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Active
                </Typography>
            </div>
            <div className={classes.marginBottom}>
                <Typography variant="h4" className={classes.h4} style={{ color: "#65dd9b" }}>
                    <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <span className={classes.daily}>
                    (+<NumberFormat value={deltarecovered} displayType={'text'} thousandSeparator={true} />)
                </span>

                <div className={classes.percent}>
                    {'[' + ((recovered * 100) / confirmed).toFixed(2) + '%]'}
                </div>
                <Typography variant="subtitle1" className={classes.text}>
                    Total Recovered
                </Typography>

            </div>
        </div>
    )
}

export default TotalReport;

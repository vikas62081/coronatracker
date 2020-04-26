import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "rgb(25, 118, 210)",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        padding: 6,
        // border:"1px solid rgba(236, 230, 230, 0.57)"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:nth-of-type(1)': {
            backgroundColor: "rgb(210, 224, 239)",
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        // minWidth: 700,
    },
    redIcons: {
        color: "red",
        fontSize: 11,
       paddingLeft:2 // padding: "0 6px"
    },
    icons: {
        fontSize: "inherit",
        verticalAlign: -2,
    },
    greenIcons: {
        color: "green",
        fontSize: 11,
        paddingLeft:2
    },
});

export default function TableTracker({rows}) {
    const classes = useStyles();
   
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
                        <StyledTableCell >State</StyledTableCell>
                        <StyledTableCell >Confirmed</StyledTableCell>
                        <StyledTableCell >Death</StyledTableCell>
                        <StyledTableCell >Recovered</StyledTableCell>
                        <StyledTableCell >Active*</StyledTableCell>
                        <StyledTableCell >*</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.length > 0 && rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
                            <StyledTableCell >{row.state}</StyledTableCell>
                            <StyledTableCell >{row.confirmed}
                                {row.deltaconfirmed > 0 ? <span className={classes.redIcons}>
                                    <ArrowUpwardIcon className={classes.icons} />{row.deltaconfirmed}
                                </span> : null}
                            </StyledTableCell>
                            <StyledTableCell >{row.deaths}
                                {row.deltadeaths > 0 ? <span className={classes.redIcons}>
                                    <ArrowUpwardIcon className={classes.icons} />{row.deltadeaths}
                                </span> : null}
                            </StyledTableCell>
                            <StyledTableCell >{row.recovered}
                                {row.deltarecovered > 0 ? <span className={classes.greenIcons}>
                                    <ArrowUpwardIcon className={classes.icons} />{row.deltarecovered}
                                </span> : null}
                            </StyledTableCell>
                            <StyledTableCell >{row.active}</StyledTableCell>
                            <StyledTableCell >
                                {row.active > 0 ?<span className={classes.redIcons}>Not Free</span>
                                 :<span className={classes.greenIcons}>Free</span>}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

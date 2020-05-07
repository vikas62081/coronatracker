import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
import NumberFormat from 'react-number-format';
import { toggleHeart } from '../../actions/reducerActions'
import {Link} from 'react-router-dom'
import BackspaceIcon from '@material-ui/icons/Backspace';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp';
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'district', numeric: false, disablePadding: true, label: 'District' },
  { id: 'confirmed', numeric: true, disablePadding: false, label: 'Cnf' },
  { id: 'deceased', numeric: true, disablePadding: false, label: 'Deaths' },
  { id: 'recovered', numeric: true, disablePadding: false, label: 'Recd' },
  { id: 'active', numeric: true, disablePadding: false, label: 'Active' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'default'}
            // sortDirection={orderBy === headCell.id ? order : false}
            className={headCell.disablePadding ? 'default' : classes.tableCell}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
    fontSize: '150%',
    fontWeight: 600,
    letterSpacing: '0.095em',
    textDecoration: 'underline'

  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, title } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}>
        <Link to='/' style={{marginRight:8}} title="Go Back">
        <IconButton edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit" >
                        <BackspaceIcon />
                    </IconButton>
      </Link>
      <Typography className={classes.title} align='left' variant="h6" id="tableTitle" component="div">
        {title} COVID-19 STATISTICS
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  table: {
    // minWidth: 750,
  },
  redIcons: {
    color: "red",
    fontSize: 11,
    paddingLeft: 2 // padding: "0 6px"
  },
  icons: {
    fontSize: "inherit",
    verticalAlign: -2,
  },
  heartIconsEmpty: {
    fontSize: "150%",
    verticalAlign: 'sub',
    cursor: 'pointer'
  },
  heartIconsFill: {
    fontSize: "150%",
    verticalAlign: 'sub',
    color: '#f11a55',
    cursor: 'pointer'
  },
  greenIcons: {
    color: "green",
    fontSize: 11,
    paddingLeft: 2
  },
  tableCell: {
    padding:'8px 5px'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function DistTableTracker({ rows,stateName, dispatch }) {
  const classes = useStyles();
  const title=stateName
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('confirmed');
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event) => {
  // if (event.target.checked) {
  //   const newSelecteds = rows.map((n) => n.name);
  //   setSelected(newSelecteds);
  //   return;
  // }
  // setSelected([]);
  // };

  const handleClick = (event, row) => {
    // addRowToSaveUser(dispatch,row)
    toggleHeart(dispatch, row.id)
    // const selectedIndex = selected.indexOf(name);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }

    // setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} title={title.toUpperCase()} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  // const labelId = `enhanced-table-checkbox-${index}`;
const {confirmed:deltaconfirmed,deceased:deltadeaths,recovered:deltarecovered}=row.delta
          const {zone}=row     
return (
                    
                    <TableRow
                      hover
                      //   role="checkbox"
                      //   aria-checked={isItemSelected}
                      //   tabIndex={-1}
                      title={`${row.district} is in ${zone} zone`}
                      key={index}
                    >
                      <TableCell component="th" scope="row" className={classes.tableCell}>
                        {/* {(row.status === false ?
                          <FavoriteBorderOutlinedIcon onClick={(event) => handleClick(event, row)}
                            className={classes.heartIconsEmpty} />
                          : <FavoriteOutlinedIcon onClick={(event) => handleClick(event, row)}
                            className={classes.heartIconsFill} />)} */}
                            <ErrorTwoToneIcon className={zone}/>
                        {row.district}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <NumberFormat value={row.confirmed} displayType={'text'} thousandSeparator={true} />
                        {deltaconfirmed > 0 ? <span className={classes.redIcons}>
                          <ArrowUpwardIcon className={classes.icons} />{deltaconfirmed}
                        </span> : null}</TableCell>
                      <TableCell className={classes.tableCell}>
                        <NumberFormat value={row.deceased} displayType={'text'} thousandSeparator={true} />
                        {deltadeaths > 0 ? <span className={classes.redIcons}>
                          <ArrowUpwardIcon className={classes.icons} />{deltadeaths}
                        </span> : null}</TableCell>
                      <TableCell className={classes.tableCell}>
                        <NumberFormat value={row.recovered} displayType={'text'} thousandSeparator={true} />
                        {deltarecovered > 0 ? <span className={classes.greenIcons}>
                          <ArrowUpwardIcon className={classes.icons} />{deltarecovered}
                        </span> : null}</TableCell>
                      <TableCell className={classes.tableCell}>
                        <NumberFormat value={row.active} displayType={'text'} thousandSeparator={true} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[8, 5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

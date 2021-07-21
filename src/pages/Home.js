import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, loadUsers } from '../redux/Actions';
import { useHistory } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { CardContent } from '@material-ui/core';
import CardContentFile from './CardContent'
import Menu from './Menu'
import Footer from './ContactUsContent/Footer';
const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const Home = () => {

  const classes = useStyles();
  const buttonStyle = useButtonStyles();
  let dispatch = useDispatch();
  let history = useHistory();
  const { emps } = useSelector(state => state.emps)

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      dispatch(deleteUsers(id));
    }
  }
  return (
    <div className="body-bg-mr">
         <Menu/>
      <NavbarComponent />
      <CardContentFile/>
      <div className="flex-row mt-5 btn-handle-font">
        <Button variant="contained" color="primary" onClick={() => history.push("/addEmpPage")}>Add Employee</Button>
        <Button variant="contained" color="secondary" onClick={() => history.push("/about")}>About Us</Button>
        <Button variant="contained" color="success" onClick={() => history.push("/ProductList")}>Product List</Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Emp ID</StyledTableCell>
              <StyledTableCell align="center">Emp Name</StyledTableCell>
              <StyledTableCell align="center">Emp Salary</StyledTableCell>
              <StyledTableCell align="center">IsMarried status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emps && emps.map((emp) => (
              <StyledTableRow key={emp.id}>
                <StyledTableCell component="th" scope="row">
                  {emp.id}
                </StyledTableCell>
                <StyledTableCell align="center">{emp.empId}</StyledTableCell>
                <StyledTableCell align="center">{emp.empName}</StyledTableCell>
                <StyledTableCell align="center">{emp.empSal}</StyledTableCell>
                <StyledTableCell align="center">{emp.isMarried}</StyledTableCell>
                <StyledTableCell align="center">
                  <div className={buttonStyle.root}>
                    <ButtonGroup variant="contained" aria-label="contained primary button group">
                      <Button style={{ marginRight: "5px" }} color="secondary" onClick={() => handleDelete(emp.id)}>Delete</Button>
                      <Button color="primary" onClick={() => history.push(`/editEmpPage/${emp.id}`)}>Edit</Button>

                    </ButtonGroup>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-5">
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
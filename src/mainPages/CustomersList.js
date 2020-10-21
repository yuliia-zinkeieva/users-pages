import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Chip from '@material-ui/core/Chip';
import deleteCustomer from "../actions/deleteCustomer";
import CheckAuthorization from "../actions/CheckAuthorization";

//todo: react hooks, how to avoid else or display emptiness <h1></h1>
const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

export default function CustomersList(props) {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [isAuthorized, setStatus] = React.useState(false);

    function receivedData() {
        fetch('/customer/list', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                return (response.json());
            })
            .then(result => {
                setData(result);
            })
            .catch(e => console.log(e));
    }

    function getStatus() {
        CheckAuthorization().then(status => setStatus(status))
            .catch(e => console.log(e))
    }

    React.useEffect(() => {
        receivedData();
        getStatus();
    }, [])

    return (
        <TableContainer component={Paper}>
            <h2> List of customers</h2>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell align="center">customers name</TableCell>
                        <TableCell align="center">customers e-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.firstname}>
                            <TableCell align="center">
                                {isAuthorized ? <Chip
                                        deleteIcon={<DeleteIcon/>}
                                        label="Delete"
                                        color="primary"
                                        onDelete={() => deleteCustomer(row.id)}
                                    /> :
                                    <h2> </h2>}
                            </TableCell>
                            <TableCell align="center">{row.firstname}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link to="">
                <button> Back</button>
            </Link>
        </TableContainer>
    );
}

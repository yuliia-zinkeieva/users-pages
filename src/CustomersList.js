import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(number, name, email) {
    return {number, name, email};
}


export default class CustomersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    receivedData() {
        console.log('receive');
        fetch('/customer/list', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},

        })
            .then(response => {
                return (response.json());
            })
            .then(result => {
                console.log('res', result);
                //let list1 = JSON.stringify(result, null, 2);
                this.setState({
                    data: result
                })
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.receivedData()
    }


    render() {
        //const classes = useStyles();  //??????
        const rows = [];
        for (let i = 0; i < this.state.data.length; i++) {
            rows.push(createData(i + 1, this.state.data[i][1], this.state.data[i][0]));
        }

        return (
            <TableContainer component={Paper}>
                <h2> List of customers</h2>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell align="center">customers name</TableCell>
                            <TableCell align="center">customers e-mail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link to="">
                    <button> Back </button>
                </Link>
            </TableContainer>
        );
    }
}

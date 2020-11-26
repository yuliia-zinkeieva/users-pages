import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
import {useDispatch, useSelector} from "react-redux";
import {authenticateAction, chooseCustomerAction, deleteCustomerAction} from "../services/redux/actions/auth";
import {Link} from "react-router-dom";
import '../styles/tableButton.scss';
// import '../styles/table.scss';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        color: '#f8f8f8',
    },
    tableCell: {
        color: '#f8f8f8',
        // font: '15px',
    },
    headCell: {
        color: '#c1aaff',
    },

});

export default function CustomersList(props) {
    const classes = useStyles();
    let history = useHistory();
    const [data, setData] = React.useState([]);
    const dispatch = useDispatch();
    const authenticateCallback = () => {
        dispatch(authenticateAction());
    }
    authenticateCallback();
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized);
    const deleteCustomerCallback = (id) => {
        dispatch(deleteCustomerAction(id));
    }

    const chooseCustomerCallback = (data = {}) => {
        //console.log(data)
        dispatch(chooseCustomerAction(data));
    }

    //const [isAuthorized, setStatus] = React.useState(false);

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

    // function getStatus() {
    //     CheckAuthorization().then(status => setStatus(status))
    //         .catch(e => console.log(e))
    // }

    React.useEffect(() => {
        receivedData();
        //getStatus();
    }, [])

    return (
        <TableContainer>
            <h2> List of customers</h2>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell className={classes.headCell} align="center">customers name</TableCell>
                        <TableCell className={classes.headCell} align="center">customers e-mail</TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableCell}>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className={classes.tableCell} align="center" style={{width: 50}}>
                                {isAuthorized ? <Chip
                                        deleteIcon={<DeleteIcon/>}
                                        label="Delete"
                                        color="primary"
                                        onDelete={() => deleteCustomerCallback(row.id)}
                                    /> :
                                    <h2></h2>}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="center" style={{width: 400}}>
                                {row.firstname}

                            </TableCell>
                            <TableCell className={classes.tableCell} align="center"
                                       style={{width: 400}}>{row.email} </TableCell>
                            <TableCell className={classes.tableCell} align="center" style={{width: 50}}>
                                {isAuthorized ? <Chip
                                        icon={<EditIcon/>}
                                        label="Edit"
                                        color="primary"
                                        onClick={() => {
                                            chooseCustomerCallback({id: row.id, name: row.firstname, email: row.email});
                                            history.push('/edit');
                                        }}//CustomerCallback(row.id)
                                    /> :
                                    <h2></h2>}
                            </TableCell>
                            {/*<TableCell align="center" style={{width: 50}}>  <TextField id="standard-basic" label=.../>*/}
                            {/*    {isAuthorized ? <Chip*/}
                            {/*            doneIcon={<DoneIcon/>}*/}
                            {/*            label="Done"*/}
                            {/*            color="primary"*/}
                            {/*            onClick={ () => (<h1> edit </h1>)}//CustomerCallback(row.id)*/}
                            {/*        />  :*/}
                            {/*        <h2> </h2>}*/}
                            {/*</TableCell>*/}
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
            <Link to="">
                <button className='tableButton'> Back</button>
            </Link>
            {isAuthorized ? <Link to="/create">
                    <button className='tableButton'> Create one more</button>
                </Link> :
                <h2></h2>}
        </TableContainer>
    );
}

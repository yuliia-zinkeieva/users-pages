import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import {useDispatch, useSelector} from "react-redux";
import {authenticateAction, getCustomerAction, deleteCustomerAction} from "../../services/redux/actions/auth";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import CustomerEditForm from "../../services/redux/forms/CustomerEditForm";
import styles from './styles.module.scss'


const useStyles = makeStyles((theme) => ({
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

export default function CustomersList() {
    const classes = useStyles();
    let history = useHistory();
    const [data, setData] = React.useState([]);
    // const [open, setOpen] = React.useState(false);
    //
    // const handleOpen = (id) => {
    //     setOpen(true);
    //  };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };
    const dispatch = useDispatch();
    const authenticateCallback = () => {
        dispatch(authenticateAction());
    }
    authenticateCallback();
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized);
    const deleteCustomerCallback = (id) => {
        dispatch(deleteCustomerAction(id));
    }

    const getCustomerCallback = (id) => {
        dispatch(getCustomerAction(id));

    }

    // const customer = useSelector(({auth}) => auth.customer);

    function receivedData() {
        fetch('/customer/list', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (response.status === 500) {
                    localStorage.setItem('error', 'server does not work')
                    history.push('/error')
                }
                return (response.json());
            })
            .then(result => {
                setData(result);
            })
            .catch(e => console.log(e));
    }

    React.useEffect(() => {
        receivedData();
    }, [])

    return (
        <TableContainer>
            <h2 className={styles.home_header}> List of customers</h2>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell className={classes.headCell} align="center">customers name</TableCell>
                        <TableCell className={classes.headCell} align="center">customers e-mail</TableCell>
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
                                    <h2> </h2>}
                            </TableCell>

                            <TableCell className={classes.tableCell} align="center" style={{width: 400}}
                                       onClick={() => {
                                           if (isAuthorized) {
                                               // editedCustomer = row.id;
                                               // console.log(row.id, editedCustomer)
                                               getCustomerCallback(row.id);
                                               history.push(`/${row.id}`);
                                           }
                                       }}>
                                {row.firstname}

                            </TableCell>

                            <TableCell className={classes.tableCell} align="center"
                                       style={{width: 400}}>{row.email} </TableCell>

                        </TableRow>

                    ))}
                </TableBody>
            </Table>

            {isAuthorized ?
                <Button variant="outlined" color="primary" href="create" className={styles.button_create}>
                    Create new
                </Button>
                :
                <h2></h2>}
        </TableContainer>
    );
}

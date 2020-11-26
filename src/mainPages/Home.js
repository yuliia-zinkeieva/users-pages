// import React from "react";
// import {useSelector} from "react-redux";
// import {Link} from "react-router-dom";
// import {Col, Row, Container} from "react-grid-system";
// import {useHistory} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {authenticateAction, logOutAction} from "../services/redux/actions/auth";
// import styles from '../styles/home.module.scss'
//
// import '../styles/button.scss'
// import '../styles/navigationBar.scss'
// import '../styles/logOutButton.scss'
// import CustomersList from "./CustomersList";
//
// import {makeStyles} from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import LoginForm from "../services/redux/forms/LoginForm";
// import Registration from "./Registration";
// import RegistrationForm from "../services/redux/forms/RegistrationForm";
// console.log(styles);
//
// function Status({status}) {
//     let history = useHistory();
//      const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//
//     const handleOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//
//     const dispatch = useDispatch();
//     const logOutCallback = () => {
//         dispatch(logOutAction());
//     }
//
//     if (status) {
//         return (
//             <div>
//                 <button className='logOutButton' onClick={logOutCallback}>
//                     Logout
//                 </button>
//             </div>
//         );
//     } else {
//         return (
//             <Container className='navigationBar' fluid>
//                 <Row>
//                     <Col>
//                         <Link to="/registration">
//                             <button className='button' variant="outlined">
//                                 Sign Up
//                             </button>
//                         {/*<Modal*/}
//                         {/*    aria-labelledby="transition-modal-title"*/}
//                         {/*    aria-describedby="transition-modal-description"*/}
//                         {/*    className={classes.modal}*/}
//                         {/*    open={open}*/}
//                         {/*    onClose={handleClose}*/}
//                         {/*    closeAfterTransition*/}
//                         {/*    BackdropComponent={Backdrop}*/}
//                         {/*    BackdropProps={{*/}
//                         {/*        timeout: 500,*/}
//                         {/*    }}*/}
//                         {/*>*/}
//                         {/*    <Fade in={open}>*/}
//                         {/*        <RegistrationForm/>*/}
//                         {/*    </Fade>*/}
//                         {/*</Modal>*/}
//                         </Link>
//                     </Col>
//                     <Col>
//                         <button className='button' onClick={handleOpen}>
//                             Log IN
//                         </button>
//                         <Modal
//                             aria-labelledby="transition-modal-title"
//                             aria-describedby="transition-modal-description"
//                             className='form'//{classes.modal}
//                             open={open}
//                             onClose={handleClose}
//                             closeAfterTransition
//                             BackdropComponent={Backdrop}
//                             BackdropProps={{
//                                 timeout: 500,
//                             }}
//                         >
//                             <Fade in={open}>
//                                 <LoginForm/>
//                             </Fade>
//                         </Modal>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }
//
//
// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     // paper: {
//     //     backgroundColor: theme.palette.background.paper,
//     //     border: '2px solid #000',
//     //     boxShadow: theme.shadows[5],
//     //     padding: theme.spacing(2, 4, 3),
//     // },
// }));
//
//
// const Home = () => {
//        const dispatch = useDispatch();
//     const authenticateCallback = () => {
//         dispatch(authenticateAction());
//     }
//     authenticateCallback();
//     const isAuthorized = useSelector(({auth}) => auth.isAuthorized);
//     // React.useEffect(() => {
//     //     // todo: checkAuthorization action
//     //     CheckAuthorization()//.then((authorized) => setIsAuthorized(authorized))
//     // }, [])
//
//     return (
//         <div className={styles.home}>
//             <Status status={isAuthorized}/>
//             <Container fluid>
//                 {/*<h1>Main page </h1>*/}
//                 <CustomersList/>
//                 <Col>
//                     {/*<Link to="/customers">*/}
//                     {/*    <button variant="outlined">*/}
//                     {/*        List of customers*/}
//                     {/*    </button>*/}
//                     {/*</Link>*/}
//                 </Col>
//             </Container>
//         </div>
//     );
// }
//
// export default Home;
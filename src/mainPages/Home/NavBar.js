import React from "react";
import {useDispatch} from "react-redux";
import {Col, Container, Row} from "react-grid-system";
import {logOutAction} from "../../services/redux/actions/auth";
import styles from './styles.module.scss'
import Button from '@material-ui/core/Button';
import logo from './mylogo.png'
import SignUpLogIn from "./SignUpLogIn";


export default function NavBar({status}) {
    const dispatch = useDispatch();
    const logOutCallback = () => {
        dispatch(logOutAction());
    }

    return (
        <Container className={styles.nav_bar} fluid>
            {!status ? <>
                    <img src={logo} alt="Logo" height={50} width={50} className={styles.logo}/>
                    <SignUpLogIn status={status} logout={logOutAction()}/>
                </>
                :
                <> <img src={logo} alt="Logo" height={50} width={50} className={styles.logo}/>
                        <div className={styles.logout_wrapper}><Button variant="contained" color="secondary" onClick={logOutCallback}>
                            Log OUT
                        </Button></div>
                    </>
            }
        </Container>
    );
}

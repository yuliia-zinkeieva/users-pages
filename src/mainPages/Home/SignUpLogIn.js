import React, {Component} from 'react';
import Modal from 'react-modal';
// import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import {Col, Container, Row} from "react-grid-system";
import RegistrationForm from "../../services/redux/forms/RegistrationForm";
import styles from "./modal.module.scss";
import LoginForm from "../../services/redux/forms/LoginForm";


class SignUpLogIn extends Component {
    state = {
        modalIsOpen: false,
        secondModalIsOpen: false,
        status: this.props.status,
        logout: this.props.logout
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    openSecondModal = () => {
        this.setState({secondModalIsOpen: true});
    };

    closeSecondModal = () => {
        this.setState({secondModalIsOpen: false});
    };

    render() {
        return (

            <div className={styles.wrapper}>
                <Button onClick={this.openModal} variant="contained" color="primary" >
                    {/*href="registration"*/}
                    Sign Up
                </Button>

                <Button onClick={this.openSecondModal} variant="outlined" color="primary" className={styles.button}>
                    LOG IN
                </Button>

                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}
                       className={styles.ReactModal_Body}>

                    <div>
                        {/*className={styles.home}*/}
                        <RegistrationForm/>

                        <Button onClick={this.closeModal} variant="outlined" color="primary" fullWidth={true}>
                            {/*href="registration"*/}
                            close
                        </Button>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.secondModalIsOpen}
                    onRequestClose={this.closeSecondModal}
                    className={styles.ReactModal_Body}
                >
                    <div>
                        {/*className={styles.home}*/}
                        <LoginForm/>

                        <Button onClick={this.closeSecondModal} variant="outlined" color="primary" fullWidth={true}>
                            {/*href="registration"*/}
                            close
                        </Button>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default SignUpLogIn;

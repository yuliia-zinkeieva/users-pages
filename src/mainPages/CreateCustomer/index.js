import React from "react";
import store from "../../services/redux/store";
import {Provider} from "react-redux";
import CustomerForm from '../../services/redux/forms/CustomerForm'
import styles from './styles.module.scss'

const CreateCustomer = () => {
    return (
        <div className={styles.home}>
            <Provider store={store}>
                <div className={styles.home_content}>
                    <h1>Create a customer</h1>
                    <CustomerForm/>
                </div>
            </Provider>
        </div>
    );
}

export default CreateCustomer;


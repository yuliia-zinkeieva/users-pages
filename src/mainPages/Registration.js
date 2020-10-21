import React from "react";
import {Provider} from "react-redux";
import store from "../services/redux/store";
import RegistrationForm from "../services/redux/forms/RegistrationForm";

const Registration = () => {
    return (
        <Provider store={store}>
            <div style={{padding: 15}}>
                <h2>Registration</h2>
                <RegistrationForm/>
            </div>
        </Provider>
    );
}

export default Registration;
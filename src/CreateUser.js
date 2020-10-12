import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import RegistrationForm from "./RegistrationForm";


const CreateUser = () => {
    return (
        <Provider store={store}>
            <div style={{padding: 15}}>
                <h2>Registration</h2>
                <RegistrationForm/>
            </div>
        </Provider>
    );
}

export default CreateUser;

//<SyncValidationForm onSubmit={showResults} />
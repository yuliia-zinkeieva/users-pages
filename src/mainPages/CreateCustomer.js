import React from "react";
import {Link} from "react-router-dom";
import store from "../services/redux/store";
import {Provider} from "react-redux";
import CustomerForm from "../services/redux/forms/CustomerForm";

const CreateCustomer = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Create a customer</h1>
                <Link to="">
                    <button variant="outlined">
                        Back
                    </button>
                </Link>
            </div>
            <div style={{padding: 15}}>
                <CustomerForm/>
            </div>
        </Provider>
    );
}

export default CreateCustomer;


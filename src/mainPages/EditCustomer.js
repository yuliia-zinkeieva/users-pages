import React from "react";
import {Link} from "react-router-dom";
import store from "../services/redux/store";
import {Provider} from "react-redux";
import CustomerEditForm from "../services/redux/forms/CustomerEditForm";

const EditCustomer = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Edit a customer</h1>
                <Link to="/customers">
                    <button variant="outlined">
                        Back
                    </button>
                </Link>
            </div>
            <div style={{padding: 15}}>
                <CustomerEditForm />
            </div>
        </Provider>
    );
}

export default EditCustomer;
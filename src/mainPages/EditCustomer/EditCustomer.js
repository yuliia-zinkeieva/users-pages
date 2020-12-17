import React from "react";
import {Link} from "react-router-dom";
import store from "../../services/redux/store";
import {Provider, useSelector} from "react-redux";
import CustomerEditForm from "../../services/redux/forms/CustomerEditForm";

const EditCustomer = () => {
    const customer = useSelector(({auth}) => auth.customer);
    console.log(customer);
    return (
        <Provider store={store}>
            <div>
                <h1>Edit a customer</h1>
                <Link to="">
                    <button variant="outlined">
                        Back
                    </button>
                </Link>
            </div>
            <div style={{padding: 15}}>
                <CustomerEditForm initialValues={{email: customer.email, firstname: customer.firstname}} />
            </div>
        </Provider>
    );
}

export default EditCustomer;
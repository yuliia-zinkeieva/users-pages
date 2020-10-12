import React from "react";
import {Link} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import CustomerForm from "./CustomerForm";


const CreateCustomer = (props) => {
    console.log(props);


    return (
        <Provider store={store}>
            <div>
                <h1>Create a customer</h1>
                <Link to="/?status=true">
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


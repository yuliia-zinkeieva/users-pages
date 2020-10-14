import React from "react";
import {Link} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import DeleteForm from "./DeleteForm";
import CheckAuthorization from "./CheckAuthorization";


const DeleteCustomer = () => {
    CheckAuthorization().then(status =>{
        if (status ===false){
            window.location.href = 'http://localhost:3000/login';
        }
    })

    return (
        <Provider store={store}>
            <div>
                <h1>Delete a customer</h1>
                <Link to="">
                    <button variant="outlined">
                        Back
                    </button>
                </Link>

            </div>
            <div style={{padding: 15}}>
                <DeleteForm/>
            </div>
        </Provider>

    );
}

export default DeleteCustomer;


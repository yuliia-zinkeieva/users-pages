import React from "react";
import {Link} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import CustomerForm from "./CustomerForm";
import CheckAuthorization from "./CheckAuthorization";


const CreateCustomer = () => {
    // CheckAuthorization().then(status =>{
    //     //console.log('stayus',status);
    //     if (status ===false){
    //         window.location.href = 'http://localhost:3000/login';
    //     }
    // })
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


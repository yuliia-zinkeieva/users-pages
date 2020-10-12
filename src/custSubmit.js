import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {

        window.location.href = 'http://localhost:3000';
    } else {
        // Something went wrong here
    }

}


function custSubmit(values) {

    fetch('http://localhost:4000/customer', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
           // handleRedirect(response);
        })
        .catch(e => console.log(e))


    window.alert(`You successfully created a new customer`)


}


export default custSubmit;
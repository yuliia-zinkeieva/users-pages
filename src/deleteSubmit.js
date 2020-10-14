import React from "react";

function deleteSubmit(values) {

    fetch('/customer/delete', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
           window.location.href = 'http://localhost:3000/delete'
        })
        .catch(e => console.log(e))
}


export default deleteSubmit;
import React from "react";


// const handleRedirect = (res) => {
//     if (res.status === 200) {
//
//         window.location.href = 'http://localhost:3000';
//     } else {
//         // Something went wrong here
//     }
//
// }


function customersSubmit(values) {

    fetch('/customer', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(({status}) => {
            if (status === 401)
                window.location.href = 'http://localhost:3000/error'
            else
                window.location.href = 'http://localhost:3000/create'
        })
            .catch(e => console.log(e))
}


export default customersSubmit;
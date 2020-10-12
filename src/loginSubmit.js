import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {
        const status = 'true';

        window.location.href = 'http://localhost:3000?status=' + status;
    } else {
        const status = 'false';
        window.location.href = 'http://localhost:3000?status=' + status;
    }

}


function loginSubmit(values) {
    fetch('http://localhost:4000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
            handleRedirect(response);
            //return response.json();
        })
        .catch(e => console.log(e))
}


export default loginSubmit;
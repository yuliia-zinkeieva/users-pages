import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {
        window.location.href = 'http://localhost:3000';
    } else {
        window.location.href = 'http://localhost:3000/registration';
        window.alert('incorrect data');
    }
}


function submit(values) {
    fetch('/auth/sign-up', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
            handleRedirect(response);
        })
        .catch(e => console.log(e))
}


export default submit;
import React from "react";

const LogOut = () => {
    fetch('/auth/sign-out', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            window.location.href = 'http://localhost:3000';
        })
        .catch(e => console.log(e))
}


export default LogOut;
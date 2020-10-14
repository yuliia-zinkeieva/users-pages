import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {
        console.log('heeeere')
        const status = false;

        window.location.href = 'http://localhost:3000';
    } else {
        window.alert('errors occurred')
    }

}

//todo: refresh page
const LogOut = () => {
    fetch('/auth/sign-out', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            // handleRedirect();
            //return response.json();
        })
        .catch(e => console.log(e))
}


export default LogOut;
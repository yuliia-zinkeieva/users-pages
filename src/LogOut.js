import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {
        console.log('heeeere')
        const status = false;

        window.location.href = 'http://localhost:3000?status=' + status;
    } else {
        window.alert('errors occurred')
    }

}


const LogOut = () => {
    fetch('http://localhost:4000/logout', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        //body: JSON.stringify(values)
    })
        .then(response => {
            handleRedirect(response);
            //return response.json();
        })
        .catch(e => console.log(e))
}


export default LogOut;
import React, {Component} from "react";

const CheckAuthorization = () => {
    console.log('chack authorized');
    return fetch('/auth/me', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(({status}) => status === 200)
        .catch(e => console.log(e))
}

export default CheckAuthorization;
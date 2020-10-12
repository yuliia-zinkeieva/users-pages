import React from "react";


const handleRedirect = (res) => {
    if (res.status === 200) {

        window.location.href = 'http://localhost:3000/login';
    } else {
        // Something went wrong here
    }

}


function submit(values) {
    fetch('http://localhost:4000/user', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
            handleRedirect(response);
        })
        // .then(response => {
        //
        //     return response.json();
        // })
        // .then(result => {
        //     console.log('server', JSON.stringify(result, null, 2));
        //
        //     // return (<Redirect to='/login'/>);
        // })

        // .then(res => { res.json(); console.log('here');
        // return (
        //     <Redirect to="/customers" />
        //
        // )})
        .catch(e => console.log(e))


    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)


}


export default submit;
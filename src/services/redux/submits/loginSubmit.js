const handleRedirect = (res) => {
    if (res.status === 200) {
        window.location.href = 'http://localhost:3000';
        //todo: redirect
    } else {
        window.location.href = 'http://localhost:3000/login';
    }
}

function loginSubmit(values) {
    fetch('/auth/sign-in', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(response => {
            handleRedirect(response);
        })
        .catch(e => console.log(e))
}

export default loginSubmit;
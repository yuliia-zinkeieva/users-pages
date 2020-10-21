const LogOut = () => {
    fetch('/auth/sign-out', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            //todo: redirect
            window.location.href = 'http://localhost:3000';
        })
        .catch(e => console.log(e))
}

export default LogOut;
function customersSubmit(values) {
    fetch('/customer', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
        .then(({status}) => {
            if (status === 401)
                //todo: redirect
                window.location.href = 'http://localhost:3000/error'
            else
                window.location.href = 'http://localhost:3000/create'
        })
        .catch(e => console.log(e))
}

export default customersSubmit;
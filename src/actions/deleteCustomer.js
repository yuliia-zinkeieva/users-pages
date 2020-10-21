function deleteCustomer(id) {
    fetch('/customer/id', {///customer/id',??????
        method: 'delete',//delete method
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id})
        //todo: delete by id
    })
        .then(({status}) => {
            if (status === 200)
                //todo: redirect
                window.location.href = 'http://localhost:3000/customers' //handle via react router
            else
                window.location.href = 'http://localhost:3000/error'
        })
        .catch(e => console.log(e))
}

export default deleteCustomer;
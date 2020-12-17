import {
    SUCCESSFUL_LOGIN,
    FAILED_LOGIN,
    LOGOUT,
    AUTHENTICATE,
    SUCCESSFUL_CREATE_CUSTOMER,
    FAILED_CREATE_CUSTOMER,
    SUCCESSFUL_DELETE_CUSTOMER,
    FAILED_DELETE_CUSTOMER,
    SUCCESSFUL_EDIT_CUSTOMER, FAILED_EDIT_CUSTOMER, SUCCESSFUL_GET_CUSTOMER, FAILED_GET_CUSTOMER
} from './actionNames'
import {history} from '../../../utils/history';
import handleErrorResponse from '../../../actions/handleErrorResponse';
import { SubmissionError } from 'redux-form'
        // 'redux-form/lib/SubmissionError'


export const authenticateAction = () => (dispatch) => {
    return fetch('/auth/me', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(({status}) => {
                if (status === 200)
                    dispatch({
                        type: AUTHENTICATE,
                        data: {
                            isAuthorized: true,
                        }
                    });
                else
                    dispatch({
                        type: AUTHENTICATE,
                        data: {
                            isAuthorized: false,
                        }
                    });
            }
        )
        .catch(e => console.log(e))
}

export const loginAction = (email, password) => (dispatch) => {
    console.log(email)
    return fetch('/auth/sign-in', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(loginSuccessfulAction(email));
                history.push('/');
                window.location.reload();
            } else {
                return (response.json());
            }
        })
        .then(result => {
            dispatch(loginFailedAction(result));
        })
        // .catch(e => console.log(e))
}

export const loginSuccessfulAction = (email) => (dispatch) => {
    return dispatch({
        type: SUCCESSFUL_LOGIN,
        data: {
            time: new Date(),
            user: email
        }
    });
}

export const loginFailedAction = (errorResponse) => (dispatch) => {
    console.log('fail action', errorResponse.message)
    handleErrorResponse(errorResponse);

    // throw new SubmissionError({ email: errorResponse.message, _error: 'Login failed!' })

    return dispatch({
        type: FAILED_LOGIN,
        // message: errorResponse.message
    });
}

export const registerAction = (email, password) => (dispatch) => {
    return fetch('/auth/sign-up', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(loginSuccessfulAction(email));
                history.push('/');
                window.location.reload();
            } else {
                return (response.json());
            }
        })
        .then(result => {
            dispatch(loginFailedAction(result));
        })
        .catch(e => console.log(e))

}

export const logOutAction = () => (dispatch) => {
    fetch('/auth/sign-out', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            dispatch({type: LOGOUT});
        })
        .catch(e => console.log(e))
}

export const createCustomerAction = (email, firstname, file) => (dispatch) => {
    console.log('data from form',file);
    const data = new FormData();
    // console.log('d1',data);
    data.append('image', file);
    data.append('info', JSON.stringify({email, firstname}));
    console.log(data.get('info'), data.get('image'))

    fetch('/customer', {
        method: 'post',
        // headers: {'Content-Type': 'multipart/form-data'},
        // headers: {'Content-Type': 'application/json'},
        body:  data,
        //JSON.stringify({email, firstname,file})
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(createSuccessfulAction(email));
                history.push('/');
                window.location.reload();
            } else
                return (response.json());
        })
        .then(result => {
            dispatch(createFailedAction(result));
        })
        .catch(e => console.log(e))
}

export const createSuccessfulAction = (email) => (dispatch) => {
    return dispatch({
        type: SUCCESSFUL_CREATE_CUSTOMER,
        data: {
            customer: email
        }
    });
}

export const createFailedAction = (errorResponse) => (dispatch) => {
    handleErrorResponse(errorResponse);
    return dispatch({
        type: FAILED_CREATE_CUSTOMER,
    });
}

export const deleteCustomerAction = (id) => (dispatch) => {
    fetch(`/customer/${id}`, {
        method: 'delete',//delete method
        headers: {'Content-Type': 'application/json'},
    })
        .then(({status}) => {
            if (status === 200) {
                dispatch(deleteSuccessfulAction(id));
                history.push('/');
                window.location.reload();
            } else {
                dispatch(deleteFailedAction());
                history.push('/error');//?
                window.location.reload();
            }
        })
        .catch(e => console.log(e))
}

export const deleteSuccessfulAction = (id) => (dispatch) => {
    return dispatch({
        type: SUCCESSFUL_DELETE_CUSTOMER,
        data: {
            id: id
        }
    });
}

// export const chooseCustomerAction = (data) => (dispatch) => {
//     return dispatch({
//         type: CHOOSE_CUSTOMER,
//         data: {
//             customer: data
//         }
//     });
// }

export const deleteFailedAction = () => (dispatch) => {
    return dispatch({
        type: FAILED_DELETE_CUSTOMER,
    });
}

export const editCustomerAction = (id, email, firstname, file) => (dispatch) => {
    console.log(file)
    // console.log('data from form',file);
    const data = new FormData();
    // console.log('d1',data);
    data.append('image', file);
    data.append('info', JSON.stringify({email, firstname}));
    console.log(data.get('info'), data.get('image'))

    fetch(`/customer/${id}`, {
        method: 'post',
        // headers: {'Content-Type': 'application/json'},
        body: data
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(editSuccessfulAction());
                history.push('/');
                window.location.reload();
            } else
                return (response.json());
        })
        .then(result => {
            dispatch(editFailedAction(result));
        })
        .catch(e => console.log(e))
}

export const editSuccessfulAction = () => (dispatch) => {
    return dispatch({
        type: SUCCESSFUL_EDIT_CUSTOMER,
    });
}

export const editFailedAction = (errorResponse) => (dispatch) => {
    handleErrorResponse(errorResponse);
    return dispatch({
        type: FAILED_EDIT_CUSTOMER,
    });
}


export const getCustomerAction = (id) => (dispatch) => {
    fetch(`/customer/${id}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            if (response.status !== 200) {
                dispatch(getCustomerFailedAction());
                // history.push('/errror');
                // window.location.reload();
            }
            else
                return (response.json());
        })
        .then(result => {
            dispatch(getCustomerSuccessfulAction(id, result));

        })
        .catch(e => console.log(e))
}

export const getCustomerSuccessfulAction = (id,data) => (dispatch) => {
    console.log('data server', data);
    const receivedCustomer = data;
    receivedCustomer.id = id;
    return dispatch({
        type: SUCCESSFUL_GET_CUSTOMER,
        data: {
            customer: receivedCustomer
        }
    });
}

export const getCustomerFailedAction = () => (dispatch) => {
    // handleErrorResponse(errorResponse);
    return dispatch({
        type: FAILED_GET_CUSTOMER,
    });
}


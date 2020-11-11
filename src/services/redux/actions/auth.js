import {
    SUCCESSFUL_LOGIN,
    FAILED_LOGIN,
    LOGOUT,
    //REGISTER,
    AUTHENTICATE,
    SUCCESSFUL_CREATE_CUSTOMER,
    FAILED_CREATE_CUSTOMER,
    SUCCESSFUL_DELETE_CUSTOMER,
    FAILED_DELETE_CUSTOMER,
    SUCCESSFUL_EDIT_CUSTOMER, FAILED_EDIT_CUSTOMER, CHOOSE_CUSTOMER
} from './actionNames'
//import axios from 'axios';
import {history} from '../../../utils/history';
import handleErrorResponse from '../../../actions/handleErrorResponse';


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
    fetch('/auth/sign-in', {
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
    console.log('fail action', errorResponse)
    handleErrorResponse(errorResponse);
    return dispatch({
        type: FAILED_LOGIN,
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
    // axios.post('/auth/sign-up', {
    //     email,
    //     password,
    // })
    //     .then(response => {
    //          dispatch(logInAction()) // todo: separate loginSuccess action
    //     })
    //     .catch(e => console.log(e))
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

export const createCustomerAction = (email, firstname) => (dispatch) => {
    fetch('/customer', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, firstname})
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(createSuccessfulAction(email));
                history.push('/customers');
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
                history.push('/customers');
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

export const chooseCustomerAction = (data) => (dispatch) => {
    return dispatch({
        type: CHOOSE_CUSTOMER,
        data: {
            customer: data
        }
    });
}

export const deleteFailedAction = () => (dispatch) => {
    return dispatch({
        type: FAILED_DELETE_CUSTOMER,
    });
}

export const editCustomerAction = (id, email, firstname) => (dispatch) => {
    fetch(`/customer/${id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, firstname})
    })
        .then(response => {
            if (response.status === 200) {
                dispatch(editSuccessfulAction());
                history.push('/customers');
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


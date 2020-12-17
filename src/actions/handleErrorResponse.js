import {history} from '../utils/history'

export default function handleErrorResponse(res) {
    console.log('handle error')
    // localStorage.setItem('isAuthorized', 'false');
    localStorage.setItem('err', res.message);
    if (res.status === 422) {
        window.alert(res.message)
        // if (res.message === 'User does not exist') {
        //     history.push('/registration');
        //     window.location.reload();
        // }
    } else {
        history.push('/error');
        window.location.reload();
    }
}
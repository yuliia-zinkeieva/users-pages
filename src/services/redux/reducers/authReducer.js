const initialState = {
    isAuthorized: localStorage.getItem('isAuthorized') === 'true',
    customer: {},
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATE': {
            localStorage.setItem('isAuthorized', action.data.isAuthorized.toString());
            return {
                ...state,
                isAuthorized: action.data.isAuthorized,
            }
        }

        case 'LOGOUT': {
            localStorage.setItem('isAuthorized', 'false');
            return {
                ...state,
                isAuthorized: false,
            }
        }

        case 'SUCCESSFUL_LOGIN':
            return {
                ...state,
                loginTime: action.data.time,
                isAuthorized: true,
            }

        case 'FAILED_LOGIN':
            return {
                ...state,
                isAuthorized: false,
            }

        case 'SUCCESSFUL_CREATE_CUSTOMER':
            return {
                ...state,
                customer: action.data.customer
            }

        case 'FAILED_CREATE_CUSTOMER':
            return {
                ...state,
            }

        case 'SUCCESSFUL_DELETE_CUSTOMER':
            return {
                ...state,
                customerId: action.data.id,
            }

        case 'FAILED_DELETE_CUSTOMER':
            return {
                ...state,
            }

            case 'CHOOSE_CUSTOMER':
            return {
                ...state,
                customer: action.data.customer,
            }

        default:
            return state;
    }
}
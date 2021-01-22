import axios from 'axios';
export const REGISTER_START = 'auth/REGISTER_START';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// import {returnErrors} from './errorAction';
// import setHeaderAuthToken from '../../utils/setHeaderAuthToken';


const initialState = {
    // isAuthenticated: false,
    error: "",
    success: "",
    loading: false,
    // user: null,
    // isVerified: false,
    // verifiedMsg: ''
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true,
                error: "",
                success: ""
                // verifiedMsg: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: "Register success",
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Something went wrong",
            }
        // case RESET_PASSWORD_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         verifiedMsg: action.payload
        //     }
        // case RESET_EMAIL_SEND_FAIL:
        // case RESET_PASSWORD_FAIL:
        //     return {
        //         ...state,
        //         isLoading: false,
        //     }
        // case DESTROY_VERIFIED_MSG:
        //     return {
        //         ...state,
        //         verifiedMsg: ''
        //     }
        // case CONFIRM_EMAIL_FAIL:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isVerified: false,
        //     }
        // case LOGIN_SUCCESS:
        // case USER_LOADED:
        //     localStorage.setItem('token', action.payload.token);
        //     return {
        //         ...state,
        //         isLoading: false,
        //         user: action.payload,
        //         isAuthenticated: true,
        //         isVerified: true
        //     }
        // case LOGIN_FAIL:
        // case AUTH_ERROR:
        // case LOGOUT_SUCCESS:
        //     localStorage.removeItem('token');
        //     return {
        //         ...state,
        //         isLoading: false,
        //         user: null,
        //         isAuthenticated: false,
        //         isVerified: false
        //     }
        // case AUTH_LOADING:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        default:
            return state;
    }
}



export const register = ({name, email, password}) => dispatch => {
    dispatch({ type: REGISTER_START});
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password})
    axios.post('auth/signup', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAILURE,
                payload: err.response.data
            })
        })
}

// export const resendVerification = ({email}) => dispatch => {
//     dispatch(loading());
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({email})
//     axios.post('/api/confirm/resend', body, config)
//     .then(res => dispatch({
//         type: CONFIRM_EMAIL_SUCCESS,
//         payload: res.data
//     }))
//     .catch(err => {
//         dispatch(returnErrors(err.response.data, err.response.status))
//         dispatch({
//             type: CONFIRM_EMAIL_FAIL
//         })
//     })
// }


// export const confirmEmail = ({email, token}) => dispatch => {
//     dispatch(loading());
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({email, token})
//     axios.post('/api/confirm/confirmation', body, config)
//         .then(res => dispatch({
//             type: CONFIRM_EMAIL_SUCCESS,
//             payload: res.data
//         }))
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status))
//             dispatch({
//                 type: CONFIRM_EMAIL_FAIL
//             })
//         })
   
// }


// export const login = ({email, password}) => dispatch => {
//     dispatch(loading());
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({email, password})
//     axios.post('/api/auth/login', body, config)
//         .then(res => {
//              dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status))
//             dispatch({
//                 type: LOGIN_FAIL
//             })
//         })
// }

// export const resetPasswordEmailSend = ({email}) => dispatch => {
//     dispatch(loading());
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({email})
//     axios.post('/api/password/recover', body, config)
//     .then(res => dispatch({
//         type: RESET_EMAIL_SEND_SUCCESS,
//         payload: res.data
//     }))
//     .catch(err => {
//         dispatch(returnErrors(err.response.data, err.response.status))
//         dispatch({
//             type: RESET_EMAIL_SEND_FAIL
//         })
//     })
// }

// export const resetPasswordForm = ({password}, token) => dispatch => {
//     dispatch(loading());
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({password})
//     axios.post('/api/password/reset/'+ token , body, config)
//     .then(res => dispatch({
//         type: RESET_PASSWORD_SUCCESS,
//         payload: res.data
//     }))
//     .catch(err => {
//         dispatch(returnErrors(err.response.data, err.response.status))
//         dispatch({
//             type: RESET_PASSWORD_FAIL
//         })
//     })
// }


// export const loadUser = () => dispatch => {
//     const token = localStorage.getItem('token');
//    if(token){
//     setHeaderAuthToken(token);
//    }
//    axios.get('/api/auth')
//     .then(res => dispatch({
//         type: USER_LOADED,
//         payload: res.data
//     }))
//     .catch(err => dispatch({
//         type: AUTH_ERROR
//     }))

// }

// export const destroyVerifiedMsg = () => {
//     return {
//         type: DESTROY_VERIFIED_MSG
//     }
// }

// export const logout = () => dispatch => {
//     dispatch({
//         type: LOGOUT_SUCCESS
//     })
// }

// const loading = () => {
//     return {type: AUTH_LOADING}
// }
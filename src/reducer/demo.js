// import axios from 'axios';
var client = require('../client');

export const GET_DEMO_START = 'demo/GET_DEMO_START';
export const GET_DEMO_SUCCESS = 'demo/GET_DEMO_SUCCESS';
export const GET_DEMO_FAILURE = 'demo/GET_DEMO_FAILURE';


const initialState = {
    error: "",
    success: "",
    loading: false,
    data: null
  
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case GET_DEMO_START:
            return {
                ...state,
                loading: true,
                error: "",
                success: ""
                // verifiedMsg: action.payload
            }
        case GET_DEMO_SUCCESS:
            return {
                ...state,
                loading: false,
                success: "get demo success",
                data: action.payload
            }
        case GET_DEMO_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Something went wrong",
            }
        default:
            return state;
    }
}



export const getDemoData = () => dispatch => {
    console.log("I am fired");
    dispatch({ type: GET_DEMO_START });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // const body = JSON.stringify({ name, email, password })
    client.get('users/data', config)
        .then(res => { dispatch({
            type: GET_DEMO_SUCCESS,
            payload: res.data
        })

        console.log(res.data);
        })
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: GET_DEMO_FAILURE,
                // payload: err.response.data
            })
        })
}


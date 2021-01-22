import {
    GET_ERRORS,
    CLEAR_ERRORS,
    AUTH_LOADING
} from '../actions/actionsType';

const initialState = {
    errors: null,
    loading: false
}

 const reducer = (state = initialState, action) => {
     switch (action.type) {
         case GET_ERRORS:
             return {
                errors: action.payload,
                loading: false
             };
         case CLEAR_ERRORS:
             return {
                errors: null,
                loading: false

             };
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
         default:
             return state
     }
}

export default reducer;
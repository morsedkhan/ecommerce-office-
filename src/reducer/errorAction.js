import {
    GET_ERRORS,
    CLEAR_ERRORS
} from './actionsType';
export const returnErrors = (error, status) => dispatch => {
  dispatch({
      type: GET_ERRORS,
      payload: error
  })

  setTimeout(() => {
    dispatch({
        type: CLEAR_ERRORS,
    })
  }, 5000)
}

export default returnErrors;
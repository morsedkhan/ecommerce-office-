import axios from 'axios';

const setHeaderToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

// axios.defaults.baseURL = 'http://myurl';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.get(serviceUrl, onSuccess, onFailure)
//     .then(resp => {
//         let result = resp.data;
//         onSuccess(result);
//     })
//     .catch(error => {
//         if (onFailure) {
//             return onFailure(error);
//         }
//     })
//  }

export default setHeaderToken;
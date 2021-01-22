// client.js

var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: "https://officeecom.herokuapp.com/api/",
    /* other custom settings */
});

module.exports = axiosInstance;
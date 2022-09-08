import axios from "axios";

function getFetch(url, params = {}) {
    return axios({
        url: url,
        method: 'GET',
        params: params
    }).then((res) => res.data)
}

// function postRequest()
export {
    getFetch
}
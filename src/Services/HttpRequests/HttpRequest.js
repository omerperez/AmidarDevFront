import axios from "axios";

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data);
}

const jsonContentType = { "Content-Type": "application/json" };
function sendPostRequest(url, user, database) {
  return axios
    .post(
      url,
      {
        ...user,
        ...database,
      },
      jsonContentType
    )
    .then((res) => res.data);
}

export { getFetch, sendPostRequest };

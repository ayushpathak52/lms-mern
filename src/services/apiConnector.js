// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };


import axios from "axios";

// ✅ Create axios instance with config
export const axiosInstance = axios.create({
  withCredentials: true, // very important for sending cookies like JWT
  baseURL: process.env.REACT_APP_BASE_URL, // optional if you want to centralize base url
});

// ✅ API connector function
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData || null,
    headers: headers || {},
    params: params || {},
  });
};


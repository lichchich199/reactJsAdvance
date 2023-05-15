import axios from "axios"

const baseUrl =
  process.env.NODE_ENV == "development" ? process.env.MIX_MOCK_URL : ""

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
})

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken")
//   if (accessToken) {
//     config.headers = {
//       ...config.headers,
//       "Access-Token": accessToken,
//     }
//   }

//   return config
// })

// instance.interceptors.response.use((response) => {
//   return response
// })

export default instance

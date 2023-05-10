import axios from "../axios"

export const login = async (params) => {
  return await axios.post("/api/login", params)
}

export const logout = async () => {
  return await axios.post("/api/logout")
}

export const getMaintenanceInformation = async () => {
  return await axios.get("/api/maintenance")
}

export const getUserAddFile = async () => {
  return await axios
    .get(`/api/user/addfile`, {
      responseType: "blob",
      dataType: "binary",
    })
     
}

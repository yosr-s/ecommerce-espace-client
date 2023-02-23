import http from "./axiosContext"


const getAll = () => {
    return http.get("/categories/")
    }

const getOne = (id) => {
    return http.get(`/categories/${id}`)
    }
export default {
    getAll,getOne
    }
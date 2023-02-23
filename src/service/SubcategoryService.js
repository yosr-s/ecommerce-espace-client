import http from "./axiosContext"


const getAll = () => {
    return http.get("/subcategories/")
    }

const getOne = (id) => {
    return http.get(`/subcategories/${id}`)
    }
const getSubcategoriesByCategory = (categoryName) => {
    return http.get(`/subcategories/category/${categoryName}`)
    }
export default {
    getAll,getOne,getSubcategoriesByCategory
    }
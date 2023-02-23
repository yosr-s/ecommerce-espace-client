import http from "./axiosContext"


const getAll = () => {
    return http.get("/products/")
    }

const getOne = (id) => {
    return http.get(`/products/${id}`)
    }
const getSubcategoriesByCategoryAndSubcategory = (categoryName,subcategoryName) => {
    return http.get(`/products/category/${categoryName}/subcategory/${subcategoryName}`)
    }
export default {
    getAll,getOne, getSubcategoriesByCategoryAndSubcategory
    }
import axios from "axios";

const axiosInstanse =axios.create({

})

export const api = {
    loadItems(categoryId:any) {
return axiosInstanse.get('/items' + categoryId)
    },
    deleteItem(id:any) {
return axiosInstanse.delete('/items'+id)
    }
}
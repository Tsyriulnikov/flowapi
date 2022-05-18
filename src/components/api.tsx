import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}
})


// export const api = {
//     loadItems(categoryId:any) {
// return axiosInstanse.get('/items' + categoryId)
//     },
//     deleteItem(id:any) {
// return axiosInstanse.delete('/items'+id)
//     }
// }
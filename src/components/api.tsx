import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'fe698d58-4d10-4f41-a217-bc0f632c98e5'}
})

export const TodoListApi={
    getTodoList:()=>{
       return instanse.get<Array<getTodoListType>>(`${'todo-lists'}`)
    }
}

type getTodoListType={
    "id":string,
    "title":string,
    "addedDate":string,
    "order":number
}


// export const api = {
//     loadItems(categoryId:any) {
// return axiosInstanse.get('/items' + categoryId)
//     },
//     deleteItem(id:any) {
// return axiosInstanse.delete('/items'+id)
//     }
// }
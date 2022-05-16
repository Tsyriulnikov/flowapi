import {api} from "../components/api";

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'status-changed':
            return {...state, status: action.status}
        case 'error-changed':
            return {...state, error: action.error}
        case 'items-loaded' :
            return {...state, items: action.items}
        case 'item-deleted':
            return {...state, items: state.items.filter(i => i.id !== action.id)}
        default:
            return state
    }
}

//action creators
export const itemsLoadedAC = (items) => {type:'items-loaded',items};
export const itemDeletedAC = (itemId) => {type:'item-deleted',itemId};
export const changeStatusAC = (status) => {type:'status-changed',status};
export const setErrorAC = (error) => {type:'error-changed',error};

export const loadItemsTC = (categoryId)=>(dispatch)=>{
    dispatch(changeStatusAC('loading'))
    api.loadItems(categoryId).then((res) => {
        dispatch(changeStatusAC('succes'))
        dispatch(itemsLoadedAC(res.data))
    }).catch(err=>{
        dispatch(changeStatusAC('error'))
        dispatch(setErrorAC(err))
    })
}

export const deleteItemTC = (id)=>(dispatch)=>{
    dispatch(changeStatusAC('loading'))
    api.deleteItem(id).then((res) => {
        dispatch(changeStatusAC('succes'))
        dispatch(itemDeletedAC(id))
    }).catch(err=>{
        dispatch(changeStatusAC('error'))
        dispatch(setErrorAC(err))
    })
}
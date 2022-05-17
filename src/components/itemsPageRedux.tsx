import React, {useEffect, useState} from "react";
import {api} from "./api";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemTC, loadItemsTC} from "../store/redux";

export const ItemsPageRedux = () => {
    const items = useSelector(s => s.data.items)
    const status = useSelector(s => s.items.status)
    const error = useSelector(s => s.items.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItemsTC())
    }, [])




    return (
        <div>
            {(status === 'loading') && <span>...loading</span>}
            {!!error && <span>{error.toString()}</span>}
            <ul>{
                items
                    .map(i => {
                        return <Item item={i} key={i.id}/>
                    })}
            </ul>
        </div>
    )
}

const Item = (props: any) => {
const dispatch=useDispatch()
    const deleteItem = () => {
        dispatch(deleteItemTC(props.item.id))
    }

    return (
        <li>
            {props.item.title}
            <button onClick={deleteItem}>X</button>
        </li>
    )
}
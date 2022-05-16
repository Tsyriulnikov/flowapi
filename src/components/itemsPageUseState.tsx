import React, {useEffect, useState} from "react";
import {api} from "./api";

export const ItemsPageUseState = () => {
    const [items, setItems] = useState([])
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setStatus('loading')
        setError(null)
        api.loadItems(1).then((res) => {
            setItems(res.data)
        }).catch(err => {
            setError(err)
        }).finally(() => setStatus('idle'))
    }, [])

    const deleteItem = (id:any) => {
        setStatus('loading')
        setError(null)
        api.deleteItem(id).then((res) => {
            setItems(items.filter(i => i.id !== id))
        }).catch(err => {
            setError(err)
        }).finally(() => setStatus('idle'))
    }


    return (
        <div>
            {(status === 'loading') && <span>...loading</span>}
            {!!error && <span>{error.toString()}</span>}
            <ul>{
                items
                    .map(i => {
                        return <Item item={i} deleteItem={deleteItem} key={i.id}/>
                    })}
            </ul>
        </div>
    )
}

const Item = (props: any) => {
    return (
        <li>
            {props.item.title}
            <button onClick={() => props.deleteItem(props.item.id)}>X</button>
        </li>
    )
}
import {combineReducers, compose, createStore} from 'redux';
import {itemsReducer} from "./redux";

const rootReducer=combineReducers({
    items:itemsReducer
})
//Для DEVTools  Redux
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store=createStore(rootReducer, composeEnhancers());

// @ts-ignore
window.store=store;
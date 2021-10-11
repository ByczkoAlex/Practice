import {combineReducers, createStore} from "redux";
import {AppReducer} from "../appReducer/AppReducer";

const reducers = combineReducers({
    app: AppReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store // for dev

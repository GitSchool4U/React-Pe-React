import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducer/index'
import { persistStore, persistReducer } from 'redux-persist'
import session from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: 'mystore',
    storage: session,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


let persistedStore = persistStore(store)


export { store, persistedStore }
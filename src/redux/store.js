// import { configureStore , combineReducers } from '@reduxjs/toolkit';
// import zindexReducer from './indexReducer';

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }
// const rootReducer = combineReducers({user:zindexReducer})

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },

//         })
// })


// export let persistor = persistStore(store)

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './indexReducer';

export const store = configureStore({
    reducer: {
        search: searchReducer
    }
})
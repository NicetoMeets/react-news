import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./todoReducer";

const persistConfig = {
    key: 'todo',
    storage,
};

const rootReducer = combineReducers({
    todo : todoReducer
});

const persistedRecucer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: {
        todo : persistedRecucer
    }
})
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import todoReducer from "./todoReducer";

const persistConfig = {
    key: 'todo',
    storage: storageSession,
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
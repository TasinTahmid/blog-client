import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import pageTypeReducer from "./pageTypeSlice";
import blogReducer from "./blogSlice";
import storage from "redux-persist/lib/storage";
import { blogApi } from "../apis/blogApi";
import { userApi } from "../apis/userApi";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const authPersistConfig = {
    key: "auth",
    version: 1,
    storage,
};

const pageTypePersistConfig = {
    key: "pageType",
    version: 1,
    storage,
};

const blogPersistConfig = {
    key: "blog",
    version: 1,
    storage,
};

const createPersistedReducer = (persistConfig, reducer) => {
    return persistReducer(persistConfig, reducer);
};

const store = configureStore({
    reducer: {
        auth: createPersistedReducer(authPersistConfig, authReducer),
        pageType: createPersistedReducer(pageTypePersistConfig, pageTypeReducer),
        blog: createPersistedReducer(blogPersistConfig, blogReducer),
        [blogApi.reducerPath]: blogApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(blogApi.middleware)
            .concat(userApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };

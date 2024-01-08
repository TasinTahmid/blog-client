import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import pageTypeReducer from "./pageTypeSlice";
import blogReducer from "./blogSlice";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedPageTypeReducer = persistReducer(persistConfig, pageTypeReducer);
const persistedBlogReducer = persistReducer(persistConfig, blogReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        pageType: persistedPageTypeReducer,
        blog: persistedBlogReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };

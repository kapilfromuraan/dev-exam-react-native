import rootReducer from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'githubapp-storage',
    storage: AsyncStorage,
    whitelist: ['userDetails']
}

const persist = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(persist);
export const persistor = persistStore(store);
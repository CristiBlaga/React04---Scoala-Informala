import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import episodesReducer from "./episodes/episodes";

const reducer = combineReducers({
  episodesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default { store, persistor };

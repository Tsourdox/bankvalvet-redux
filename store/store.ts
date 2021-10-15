import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { BankAction } from "./bank/bankActions";
import bankReducer from "./bank/bankReducer";
import profileReducer from "./profile/profileReducer";

/* Combine multiple reducers into a larger state */
const rootReducer = combineReducers({
    bank: bankReducer,
    profile: profileReducer,
    // etc..
});

/* Create our store */
const thunkMiddleware = applyMiddleware<AppThunkDispatch>(thunk);
const store = createStore(rootReducer, thunkMiddleware);

/* Define types for our thunks */
type KnownAction = BankAction; // add for all part states
export type AppThunkDispatch = ThunkDispatch<
    RootState,
    unknown,
    KnownAction
>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    KnownAction
>

/* Derive types from our store for strong typings */
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

/* Define our own custom hooks so we get strong typings */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
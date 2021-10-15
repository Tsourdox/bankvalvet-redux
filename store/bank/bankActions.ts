import { AppThunk } from "../store";

export interface WithdrawalAction {
    type: "WITHDRAWAL";
    payload: number;
}

export interface DepositAction {
    type: "DEPOSIT";
    payload: number;
}

export type BankAction = WithdrawalAction | DepositAction;

/** A thunk action creator to update our balance */
export const withdrawal = (value: number): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "WITHDRAWAL", payload: value });
    }

/** A thunk action creator to update our balance */
export const deposit = (value: number): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "DEPOSIT", payload: value });
    }
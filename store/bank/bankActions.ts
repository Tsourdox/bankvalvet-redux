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

export const withdrawal = (value: number): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "WITHDRAWAL", payload: value });
    }

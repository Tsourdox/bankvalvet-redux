import { WithdrawalAction, DepositAction } from "../bank/bankActions";
import { AppThunk } from "../store";

export interface SetNameAction {
    type: "SET_NAME";
    payload: string;
}

export interface SetSavingsGoalAction {
    type: "SET_SAVINGS_GOAL";
    payload: number;
}

export type ProfileAction = SetNameAction | SetSavingsGoalAction;

export const setProfileName = (name: string): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "SET_NAME", payload: name });
    }

export const setSavingsGoal = (value: number): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "SET_SAVINGS_GOAL", payload: value });
    }
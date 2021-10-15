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
export interface SetIsLoadingAction {
    type: "SET_IS_LOADING";

}

export type ProfileAction =
    SetNameAction |
    SetSavingsGoalAction |
    SetIsLoadingAction;

export const setProfileName = (name: string): AppThunk =>
    async (dispatch, getState) => {
        dispatch({ type: "SET_IS_LOADING" });
        dispatch({ type: "SET_NAME", payload: name });

        try {
            await fetch('/api/user/setname', {
                body: name,
            });
        } catch (error) {
            // save error to store
            // dispatch({ type: "SET_ERROR", payload: .... });
        }
        
    }

export const setSavingsGoal = (value: number): AppThunk =>
    async (dispatch, getState) => {
        // Talk to api or other logic...
        dispatch({ type: "SET_SAVINGS_GOAL", payload: value });
    }
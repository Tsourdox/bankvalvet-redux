import { WithdrawalAction } from "../bank/bankReducer";

export interface SetNameAction {
    type: "SET_NAME";
    payload: string;
}

export interface SetSavingsGoalAction {
    type: "SET_SAVINGS_GOAL";
    payload: number;
}

type KnownAction = SetNameAction | SetSavingsGoalAction | WithdrawalAction;

/* ------------------------------ */

interface ProfileState {
    name: string;
    savingsGoal: number;
}

const initialState: ProfileState = {
    name: '',
    savingsGoal: 0
}

function profileReducer(state: ProfileState = initialState, action: KnownAction): ProfileState {
    console.log('profileReducer');
    switch (action.type) {
        case "SET_NAME": {
            return {
                ...state,
                name: action.payload
            }
        }
        case "SET_SAVINGS_GOAL": {
            return {
                ...state,
                savingsGoal: action.payload
            }
        }
        case "WITHDRAWAL": {
            return {
                ...state,
                savingsGoal: state.savingsGoal + 10
            }
        }
        default: return state;
    }
}

export default profileReducer;
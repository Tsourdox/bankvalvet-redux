import { WithdrawalAction } from "../bank/bankActions";
import { ProfileAction } from "./profileActions";
import { ProfileState, initialState } from "./profileState";

type KnownAction = ProfileAction | WithdrawalAction;

function profileReducer(state: ProfileState = initialState, action: KnownAction): ProfileState {
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
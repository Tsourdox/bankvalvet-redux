
interface SetNameAction {
    type: "SET_NAME";
    payload: string;
}

interface SetSavingsGoalAction {
    type: "SET_SAVINGS_GOAL";
    payload: number;
}

type KnownAction = SetNameAction | SetSavingsGoalAction;

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
        default: return state;
    }
}

export default profileReducer;
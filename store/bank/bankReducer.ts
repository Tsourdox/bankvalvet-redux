import { BankAction } from "./bankActions";
import { BankState, initialState } from "./bankState";

type KnownAction = BankAction;

function bankReducer(state: BankState = initialState, action: KnownAction): BankState {
    switch (action.type) {
        case "WITHDRAWAL": {
            return {
                ...state,
                balance: state.balance - action.payload,
                transactions: [...state.transactions, -action.payload]
            }
        }
        case "DEPOSIT": {
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [...state.transactions, action.payload]
            }
        }
        default: return state;
    }
}

export default bankReducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BankState {
    balance: number;
    transactions: number[];
}

const initialState: BankState = {
    balance: 0,
    transactions: []
};

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state, { payload }: PayloadAction<number>) => {
            state.balance += payload;
            state.transactions.push(payload);
            return state;
        },
        withdrawal: (state, { payload }: PayloadAction<number>) => {
            state.balance -= payload;
            state.transactions.push(-payload);
            return state;
        }
    }
});

export const { deposit, withdrawal } = bankSlice.actions;

export default bankSlice.reducer;
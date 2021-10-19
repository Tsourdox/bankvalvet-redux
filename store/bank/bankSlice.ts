import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BankState {
    balance: number;
}

const initialState: BankState = {
    balance: 1000
};

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state, { payload }: PayloadAction<number>) => {
            state.balance += payload;
            return state;
        },
        withdrawal: (state, { payload }: PayloadAction<number>) => {
            state.balance -= payload;
            return state;
        }
    }
});

export const { deposit, withdrawal } = bankSlice.actions;

export default bankSlice.reducer;
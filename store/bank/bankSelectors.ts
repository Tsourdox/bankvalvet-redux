import { RootState } from "../store";

export const selectBalance = (state: RootState) => state.bank.balance;
export const selectTransactions = (state: RootState) => [...state.bank.transactions].reverse();
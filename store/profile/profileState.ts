export interface ProfileState {
    name: string;
    savingsGoal: number;
    isLoading: boolean;
}

export const initialState: ProfileState = {
    name: '',
    savingsGoal: 0,
    isLoading: false
}
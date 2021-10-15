import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/store";

function ProfileScreen() {
    const dispatch = useAppDispatch();
    const name = useAppSelector(state => state.profile.name);
    const savingsGoal = useAppSelector(state => state.profile.savingsGoal);

    const onSaveName = (name: string) => {
        dispatch({ type: "SET_NAME", payload: name });
    }

    const onSaveGoal = (goal: string) => {
        dispatch({ type: "SET_SAVINGS_GOAL", payload: Number(goal) });
    }

    return (
        <View style={styles.root}>
            <Text>Profile</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={onSaveName}
            />
            <TextInput
                keyboardType="number-pad"
                placeholder="Savings goal"
                value={String(savingsGoal)}
                onChangeText={onSaveGoal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfileScreen;
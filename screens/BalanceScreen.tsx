import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { selectBalance, selectTransactions } from "../store/bank/bankSelectors";
import { useAppSelector } from "../store/store";

function BalanceScreen() {
    const balance = useAppSelector(selectBalance);
    const transactions = useAppSelector(selectTransactions);
    const { name, savingsGoal } = useAppSelector(state => state.profile);

    return (
        <View style={styles.root}>
            <Text>Welcome {name}</Text>
            <Text>Balance: {balance}$</Text>
            <Text>Left to savings goal: {savingsGoal - balance}$</Text>

            <Text>Transactions</Text>
            {transactions.map((transaction, index) => (
                <Text key={index}>{transaction}</Text>
            ))}
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

export default BalanceScreen;
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { selectBalance, selectTransactions } from "../store/bank/bankSelectors";
import { useAppSelector } from "../store/store";

function BalanceScreen() {
    const balance = useAppSelector(selectBalance);
    const transactions = useAppSelector(selectTransactions);

    return (
        <View style={styles.root}>
            <Text>Balance: {balance}$</Text>
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
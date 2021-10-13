import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DepositScreen() {
    return (
        <View style={styles.root}>
            <Text>Deposit</Text>
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

export default DepositScreen;
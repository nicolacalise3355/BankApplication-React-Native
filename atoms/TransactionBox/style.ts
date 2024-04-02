import { StyleSheet } from "react-native";

export const TransactionsBoxStyle = StyleSheet.create({
    container: {
        minHeight: 100,
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 16,
        padding: 8
    },
    simpleText: {
        fontSize: 18,
        fontWeight: '600' 
    }
});
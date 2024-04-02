import { StyleSheet } from "react-native";

export const TransactionsListStyle = StyleSheet.create({
    containerScroll: {
        width: '100%',
    },
    container: {
        display: 'flex',
        gap: 8,
        backgroundColor: 'rgb(187, 227, 255)',
        flex: 1,
        padding: 8,
        width: '100%',
        borderRadius: 16,
        justifyContent: 'space-between'
    },
});
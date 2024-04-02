import { StyleSheet } from "react-native";

export const CardBoxStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
    },
    imageBackground: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardDataContainer: {
        display: 'flex',
        backgroundColor: 'rgb(187, 227, 255)',
        opacity: 0.8,
        justifyContent: 'space-between',
        padding: 8,
        width: '100%'
    },
    fullCardEmptyContainer: {
        opacity: 0.6,
        backgroundColor: 'rgb(187, 227, 255)',
        width: '100%',
        height: '100%'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    }
});
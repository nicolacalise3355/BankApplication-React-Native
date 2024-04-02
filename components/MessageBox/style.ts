import { StyleSheet } from "react-native";

export const MessageBoxStyle = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        gap: 2,
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 16,
        padding: 8,
        paddingTop: 0
    },
    containerClose: {
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    simpleText: {
        fontSize: 18,
        fontWeight: '600' 
    },
    close: {
        fontSize: 18,
        fontWeight: '700'
    },
    containerText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        display: 'flex',
        gap: 12,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16
    },
    modalTextContainer: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: '600'
    },
    modalText: {
        fontSize: 14,
        fontWeight: '400'
    },
    modalButtonClose: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: 'rgb(240, 240, 240)'
    }
});
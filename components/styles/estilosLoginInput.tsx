 import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12, 
    },

    inputContainer: {
        marginBottom: 10,
    },

    button: {
        backgroundColor: "#1f2937", 
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
    },

    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
    },
    errorText: {
        color: "red", 
        marginBottom: 10
    }    
})
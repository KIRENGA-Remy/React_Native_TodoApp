import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";

export default function Login(){
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        alignContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff',
        alignItems: 'center'
    }
})
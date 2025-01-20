import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                placeholder="Enter email"
                placeholderTextColor={'#aaa'}
                keyboardType="email-address"
                style={styles.input}
                value={email}
                />
                <TextInput 
                placeholder="Enter password"
                placeholderTextColor={'gray'}
                value={password}
                secureTextEntry
                style={styles.input}
                />
                <TouchableOpacity>
                    <view>Login</view>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>Register</View>
                </TouchableOpacity>
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
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'gray',
        borderColor: 'Black',
        padding: 8,
        marginTop: 12
    }
})
import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';

function LogInForm({loggedIn,setLoggedIn}) {
    return (loggedIn &&
        <View>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput style={styles.inputText}  placeholder='email' keyboardType='email-address' value={email} onChangeText={onChangeEmail}></TextInput>
            <TextInput style={styles.inputText} placeholder='password' secureTextEntry={true} value={password} onChangeText={onChangePassword}></TextInput>
            <Pressable onPress={() => setLoggedIn(true)}>
                <Text>Log in</Text>
                </Pressable>
        </View>
    );
}


export default function LoginScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView  keyboardDismissMode='on-drag'>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                {!loggedIn && (
                    <>
                    <Text style={styles.regularText}>Login to continue </Text>
                    <TextInput style={styles.inputText}  placeholder='email' keyboardType='email-address' value={email} onChangeText={onChangeEmail}></TextInput>
                    <TextInput style={styles.inputText} placeholder='password' secureTextEntry={true} value={password} onChangeText={onChangePassword}></TextInput>
                    <Pressable style={styles.button} onPress={() => setLoggedIn(true)}>
                        <Text style={styles.buttonText}>Log in</Text>
                        </Pressable>
                    </>
                )}
            
                {loggedIn && (
                    <Text style={styles.loggedInText}>You are logged in!</Text>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputText: {
        backgroundColor: '#EDEFEE',
        color: 'black',
        fontSize: 15,
        padding: 20,
        margin: 20
    },
    loggedInText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    button: {      
        backgroundColor: '#EE9972',
        padding: 10,       
        marginHorizontal: 80,
        marginVertical: 20,
        borderRadius: 50,
        borderWidth:2
    },
    buttonText: {
        fontSize: 30, 
        textAlign: 'center',
    }
});


import * as React from 'react';
import { Image, StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Button, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const emailValid = validateEmail(email);

  const createAlert = () => {
    Alert.alert(
      'thanks for subscribing, stay tuned!',
      '',
      [{title: 'OK', style: 'cancel', onPress: () => setEmail("") }]
  )};

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.image} source={require('../assets/little-lemon-logo-grey.png')}></Image>      
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
        <TextInput
          style={styles.emailTextInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email"
          keyboardType="email-address"
        />
      <Pressable
        style={[styles.button, !emailValid && styles.buttonDisabled]}
        onPress={createAlert}
        disabled={!emailValid}
      >
          <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 25,
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20
  },
  emailTextInput: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#497d41",
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    height:40,
  },
  button: {
    backgroundColor: "#497d41",
    padding: 5,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "grey",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",    
  }

})

export default SubscribeScreen;

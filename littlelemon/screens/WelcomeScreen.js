import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../assets/little-lemon-logo.png')}></Image>
        <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  }, 
  text: {
    fontSize: 20,
    marginTop: 48,
    paddingVertical: 10,
    textAlign: "center",
    color: "#333333",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#497d41",
    padding: 5,
    borderRadius: 8,
    margin:40
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  }
});

export default WelcomeScreen;

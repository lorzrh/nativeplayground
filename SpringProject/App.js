import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSpring, animated } from '@react-spring/native';

export default function App() {
  const [springs, api] = useSpring(() => ({
    from: { marginLeft:0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
        marginLeft: 0,
      },
      to: {
        x: 100,
        marginLeft: 100
      },
    })
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleClick}>
      <animated.View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#ff6d6d',
          borderRadius: 8,
          borderWidth: 1,
          ...springs
          
        }}
      >
        
        </animated.View>
      </Pressable>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center"

  },
});

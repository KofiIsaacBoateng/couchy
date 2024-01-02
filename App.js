import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 34}}>Couchy Is a Go!</Text>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'firebrick',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

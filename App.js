import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './src/screens/loginScreen';
import { LifeCicleScreen } from './src/screens/LifeCicleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     {/* <LoginScreen/> */}
     <LifeCicleScreen  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
});

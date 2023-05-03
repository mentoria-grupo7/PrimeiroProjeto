import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { TabScreen } from './src/navigation/TabScreen';
import { StackScreen } from './src/navigation/StackScreen';
import DrawerScreen from './src/navigation/DrawerScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<TabScreen/>*/}
      {/*<StackScreen />*/}
      {/*<DrawerScreen/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

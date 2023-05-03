import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsScreen } from '../../screens/SettingsScreen'
import { HomeScreen } from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();


export const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}
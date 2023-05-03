import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../../screens/HomeScreen';
import { SettingsScreen } from '../../screens/SettingsScreen';
/*
    É importante instalar uma lib chamado reanimated
    npx expo install react-native-gesture-handler react-native-reanimated

        module.exports = {
            ...
            plugins: ['react-native-reanimated/plugin'],
        };
*/
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
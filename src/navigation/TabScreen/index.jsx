import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../../screens/HomeScreen';
import { SettingsScreen } from '../../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size })=>{
                        let icon = ''

                        if(route.name === 'Home'){
                            icon = 'home'
                        }

                        if(route.name === 'Settings'){
                            icon = 'gear'
                        }

                        return <Icon name={icon} size={30} color="#000" />
                    },
                    headerShown: false,
                })}>
                    
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}
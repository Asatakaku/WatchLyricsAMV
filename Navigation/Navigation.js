import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
//Khai báo Stack với Tab trong Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { MaterialIcons, AntDesign, FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import Color from '../Colors/Color';
//Icon và Label cho BottomTab
const IconBottomTab = (props) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            if (props.route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
                iconColor = focused ? '#fff' : '#fff';
            return <FontAwesome5 name={iconName} size={size} color={iconColor} />;
        }
            else if (props.route.name === 'Favorite') {
              iconName = focused ? 'favorite' : 'favorite-border'
              return <MaterialIcons name="favorite-border" size={size} color={color} />;
        }
            else  if (props.route.name === 'user') {
              iconName = focused ? 'user' : 'user'
              return <AntDesign name="user" size={24} color="black" />;
            }
            else if(props.route.name === 'Subscribe') {
              iconName = focused ? 'robot-love' : 'robot-love'
              return <MaterialCommunityIcons name="robot-love" size={24} color="black" />
            }
        },
        tabBarLabel: () => { 
            return <Text style={{ color: '#fff', fontSize: 12 }}>{props.route.name}</Text>;
        }
    };
};
export default function Navigator() {
    const BottomTab = () => {
        return (
            <Tab.Navigator
                screenOptions={(props) => ({
                    tabBarStyle: { backgroundColor: Color.backgroundColor },
                    ...IconBottomTab(props)
                })}
            >
                <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false}} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
 }
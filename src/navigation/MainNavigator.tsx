import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';

export const MainNavigator: React.FC = () => {
  const tabNavigation = createBottomTabNavigator();
  const {Navigator, Screen} = tabNavigation;
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
};

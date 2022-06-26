import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, TipCalculator} from '../screens';
import {OptionsConfig} from './OptionsConfig';

export const MainNavigator: React.FC = () => {
  const tabNavigation = createBottomTabNavigator();
  const {Navigator, Screen} = tabNavigation;

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({route}) => OptionsConfig(route)}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="TipCalculator" component={TipCalculator} />
    </Navigator>
  );
};

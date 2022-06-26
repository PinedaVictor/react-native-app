import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, TipCalculator} from '../screens';

export const MainNavigator: React.FC = () => {
  const tabNavigation = createBottomTabNavigator();
  const {Navigator, Screen} = tabNavigation;
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          console.log(route);
          console.log(color);
          console.log(size);
          console.log(focused);
          return <Icon name="rocket" size={30} color="#0000ff" />;
        },
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="TipCalculator" component={TipCalculator} />
    </Navigator>
  );
};

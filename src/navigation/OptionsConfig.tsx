import {RouteProp, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Icons} from './Icons';

export const OptionsConfig = (route: RouteProp<ParamListBase, string>) => {
  const config: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: (iconState: {focused: boolean}) => {
      const iconProps = {...iconState, routeName: route.name};
      return Icons(iconProps);
    },
  };
  return config;
};

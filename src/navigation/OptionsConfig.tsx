import {RouteProp, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {TabIcon} from './TabIcon';

export const OptionsConfig = (route: RouteProp<ParamListBase, string>) => {
  const config: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: (iconState: {focused: boolean}) => {
      const iconProps = {...iconState, routeName: route.name};
      return TabIcon(iconProps);
    },
  };
  return config;
};

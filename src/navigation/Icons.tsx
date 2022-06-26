import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

interface IconProps {
  focused: boolean;
  routeName: string;
}

const handleIconName = (routeName: string) => {
  switch (routeName) {
    case 'Home':
      return 'home-outline';
    case 'Profile':
      return 'person-outline';
    case 'TipCalculator':
      return 'calculator-outline';
  }
  return 'rocket';
};

export const Icons: React.FC<IconProps> = props => {
  return (
    <Icon
      name={handleIconName(props.routeName)}
      size={styles.icon.fontSize}
      color={props.focused ? styles.icon.activeColor : styles.icon.defaultColor}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    defaultColor: '#b0b0b0',
    activeColor: '#0565f5',
  },
});

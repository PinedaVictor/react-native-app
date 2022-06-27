import React from 'react';
import {ScrollView} from 'react-native';
import {GenricChildProps} from '../types';

export const ScreenWrapper: React.FC<GenricChildProps> = props => {
  return <ScrollView>{props.children}</ScrollView>;
};

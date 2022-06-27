import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../components/atoms';

export const Profile: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={{backgroundColor: 'red'}}>
        <Text>The Profile Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MainNavigator} from './src/navigation/MainNavigator';

export const App: React.FC = () => {
  return (
    // <SafeAreaView>

    <MainNavigator />
    // </SafeAreaView>
  );
};

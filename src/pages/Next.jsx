import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

export const Next = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toHome = () => {
    const {obj, updateObj} = route.params;
    updateObj({a: obj.a + 1});
    navigation.navigate('home');
  };
  return (
    <View>
      <Text>Next</Text>
      <Text onPress={toHome}>to home</Text>
    </View>
  );
};

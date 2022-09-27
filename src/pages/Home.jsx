import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  const [obj, setObj] = useState({a: 1});
  const updateObj = useCallback(
    newObj => {
      setObj(newObj);
    },
    [setObj],
  );
  const toNext = useCallback(() => {
    navigation.navigate('next', {obj, updateObj});
  }, [navigation, obj, updateObj]);
  return (
    <View>
      <Text>Home</Text>
      {obj.a % 2 === 0 ? <Text>{obj.a} even</Text> : <Text>{obj.a} odd</Text>}
      <Text onPress={toNext}>to next</Text>
    </View>
  );
};

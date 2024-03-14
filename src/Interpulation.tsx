import {View, Button} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Interpulation = () => {
  const [isPress, setPress] = useState(false);

  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [0, 1], [100, 200]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ['#fff', '#1f1'],
    );
    const borderRadius = interpolate(animation.value, [0, 1], [10, 100]);
    return {
      width,
      height: width,
      borderRadius,
      backgroundColor,
    };
  });
  const handleAnimation = () => {
    if (isPress) {
      animation.value = withTiming(0, {duration: 1000});
    } else {
      animation.value = withTiming(1, {duration: 5000});
    }
    setPress(!isPress);
  };
  return (
    <View style={style.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 10,
          },
          animatedStyle,
        ]}
      />
      <Button title="Press Animated" onPress={handleAnimation} />
    </View>
  );
};

export default Interpulation;

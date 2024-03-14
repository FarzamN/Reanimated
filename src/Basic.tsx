import {View, Button} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import style from './style';

const Basic = () => {
  const [isPress, setPress] = useState(false);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${animation.value}deg`}],
    };
  });

  const handleAnimation = () => {
    setPress(!isPress);
    if (isPress) {
      animation.value = withSpring(500);
    } else {
      animation.value = withSpring(-500);
    }
  };
  return (
    <View style={style.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'purple',
          },
          animatedStyle,
        ]}
      />
      <Button title="Press Animated" onPress={handleAnimation} />
    </View>
  );
};

export default Basic;

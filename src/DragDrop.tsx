import {View} from 'react-native';
import React from 'react';
import style from './style';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const DragDrop = () => {
  const pressed = useSharedValue(false);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={style.container}>
        <GestureDetector gesture={tap}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'red',
                marginBottom: 10,
              },
              animatedStyle,
            ]}
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default DragDrop;

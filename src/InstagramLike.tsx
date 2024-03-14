import {View, Image, ImageBackground, Dimensions} from 'react-native';
import React, {useCallback} from 'react';
import style from './style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
const uri =
  'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const InstagramLike = () => {
  const scale = useSharedValue(0);

  const {width, height} = Dimensions.get('window');
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const doubleTab = useCallback(() => {
    scale.value = withSpring(1, undefined, end => {
      if (end) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);
  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TapGestureHandler
        numberOfTaps={2}
        maxDelayMs={200}
        onActivated={doubleTab}>
        <Animated.View style={style.container}>
          <ImageBackground
            source={{uri}}
            resizeMode="contain"
            style={{
              width,
              height,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AnimatedImage
              style={[AnimatedStyle]}
              source={require('./Images/heart.png')}
            />
          </ImageBackground>
        </Animated.View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default InstagramLike;

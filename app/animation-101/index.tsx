import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef( new Animated.Value(0) ).current
  const animatedTop = useRef( new Animated.Value(-100) ).current


  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    Animated.timing(animatedTop, {
      toValue: 0, // Posicion final de -100 a 0
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(2)
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start( () => animatedTop.setValue(-100) ) // se podrian encadenar animaciones.
  }


  return (
    <ThemedView margin className='justify-center items-center flex-1'>

      <Animated.View 
        className='bg-light-condary dark:bg-dark-secondary rounded-xl'
        style={{
          height: 150,
          width: 150,
          opacity: animatedOpacity,
          transform: [{ 
            translateY: animatedTop 
          }],
        }}
      />

      <ThemedButton className='my-5'
        onPress={fadeIn}
      >FadeIn</ThemedButton>

      <ThemedButton className='my-5'
        onPress={fadeOut}
      >FadeOut</ThemedButton>
      
    </ThemedView>
  );
};
export default Animation101Screen;

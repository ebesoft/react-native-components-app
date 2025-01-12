import useAnimation from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const { 
    animatedOpacity, 
    animatedTop, 
    fadeIn, 
    fadeOut, 
    startMovingTopPosition 
  } = useAnimation()

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
        onPress={() => {
          fadeIn({})
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 1000,
          })
        }}
      >FadeIn</ThemedButton>

      <ThemedButton className='my-5'
        onPress={() => 
          fadeOut({})
        }
      >FadeOut</ThemedButton>
      
    </ThemedView>
  );
};
export default Animation101Screen;

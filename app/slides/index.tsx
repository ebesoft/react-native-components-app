import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, ImageSourcePropType, Image, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  return (
    <ThemedView>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
      />
    </ThemedView>
  );
};
export default SlidesScreen;


interface SlideItemProps {
  item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {

  const { width } = useWindowDimensions()

  return (
    <ThemedView className='flex-1 rounded p-10 justify-center bg-red-200'
      style={{ width }}
    >
      <Image 
        source={item.img}
        style={{
          width: width * 0.7, 
          height: width * 0.7 ,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
    </ThemedView>
  );
};

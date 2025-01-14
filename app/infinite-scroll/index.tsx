import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)
    
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000)
    
  };

  return (
    <ThemedView>
      <FlatList 
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6} // Cuando lleve el 60% de la data se cargan los otros datos.
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number
}

const ListItem = ({ number }: ListItemProps) => {
  return (

    <FadeInImage 
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{
          width: '100%',
          height: 400
        }}
    />
    
    //<Image 
    //  source={{ uri: `https://picsum.photos/id/${number}/200/300` }}
    //  style={{
    //      width: '100%', 
    //      height: 400 
    //    }}
    //
    ///>
  );
};



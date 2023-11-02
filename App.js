import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import products from './data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) =>
        (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.imageItem}
            />
          </View>
        )
        }
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageItem: {
    width: "100%",
    aspectRatio: 1
  },
  itemContainer: {
    width: '50%',
    padding: 2
  }
});

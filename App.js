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
          <Image
            source={{ uri: item.image }}
            style={styles.imageItem}
          />
        )
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {
    width: "100%",
    aspectRatio: 1
  }
});

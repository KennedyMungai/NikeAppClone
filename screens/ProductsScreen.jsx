import products from '../data/products'
import { FlatList, View, StyleSheet, Image, Pressable } from 'react-native'

const ProductsScreen = () => {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<Pressable
					onPressed={() => navigation.navigate('ProductDetail', item)}
					style={styles.itemContainer}
				>
					<Image
						source={{ uri: item.image }}
						style={styles.imageItem}
					/>
				</Pressable>
			)}
			numColumns={2}
		/>
	)
}

export default ProductsScreen

const styles = StyleSheet.create({
	imageItem: {
		width: '100%',
		aspectRatio: 1
	},
	itemContainer: {
		width: '50%',
		padding: 2
	}
})

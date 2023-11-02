import products from '../data/products'
import { FlatList, View, StyleSheet, Image } from 'react-native'

const ProductsScreen = () => {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<View style={styles.itemContainer}>
					<Image
						source={{ uri: item.image }}
						style={styles.imageItem}
					/>
				</View>
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

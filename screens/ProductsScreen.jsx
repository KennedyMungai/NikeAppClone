import { FlatList, Image, Pressable, StyleSheet } from 'react-native'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductsScreen = () => {
	const navigation = useNavigation()

	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<Pressable
					onPressed={
						() => {
							navigation.navigate('Product Details')
						}
						// () => console.log(item)
					}
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

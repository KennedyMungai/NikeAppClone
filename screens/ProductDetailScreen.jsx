import { StyleSheet, View, Image, FlatList } from 'react-native'
import products from '../data/products'

const ProductDetailScreen = () => {
	const product = products[0]

	return (
		<View>
			{/* Image Carousel */}
			<FlatList
				data={product.images}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item }}
						style={styles.imageCarousel}
					/>
				)}
			/>

			{/* Title */}

			{/* Price */}

			{/* Description */}

			{/* Add To Cart Button */}

			{/* Navigation Icon */}
		</View>
	)
}

export default ProductDetailScreen

const styles = StyleSheet.create({
	imageCarousel: {
		width: '100%',
		aspectRatio: 1
	}
})

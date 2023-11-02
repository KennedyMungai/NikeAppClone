import { StyleSheet, View, Image } from 'react-native'
import products from '../data/products'

const ProductDetailScreen = () => {
	const product = products[0]

	return (
		<View>
			{/* Image Carousel */}
			<Image
				source={{ uri: product.images[0] }}
				style={styles.imageCarousel}
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

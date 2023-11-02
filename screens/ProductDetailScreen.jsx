import {
	StyleSheet,
	View,
	Image,
	FlatList,
	useWindowDimensions
} from 'react-native'
import products from '../data/products'

const ProductDetailScreen = () => {
	const product = products[0]

	const { width } = useWindowDimensions()

	return (
		<View>
			{/* Image Carousel */}
			<FlatList
				data={product.images}
				renderItem={({ item, index }) => (
					<Image
						source={{ uri: item }}
						style={[styles.imageCarousel, { width }]}
						key={index}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
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
		aspectRatio: 1
	}
})

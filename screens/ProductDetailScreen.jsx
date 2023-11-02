import {
	StyleSheet,
	View,
	Image,
	FlatList,
	useWindowDimensions,
	Text
} from 'react-native'
import products from '../data/products'
import colors from '../constants/colors'

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
			<Text style={styles.productTitle}>{product.name}</Text>

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
	},
	productTitle: {
		textAlign: 'center',
		fontSize: 24,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: colors.eerieBlack
	}
})

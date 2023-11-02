import {
	StyleSheet,
	View,
	Image,
	FlatList,
	useWindowDimensions,
	Text,
	ScrollView
} from 'react-native'
import products from '../data/products'
import colors from '../constants/colors'

const ProductDetailScreen = () => {
	const product = products[0]

	const { width } = useWindowDimensions()

	return (
		<ScrollView>
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
			<View style={styles.productDescriptionView}>
				{/* Price */}
				<Text style={styles.productPrice}>{product.price}</Text>

				{/* Description */}
				<Text style={styles.productDescription}>
					{product.description}
				</Text>

				{/* Add To Cart Button */}

				{/* Navigation Icon */}
			</View>
		</ScrollView>
	)
}

export default ProductDetailScreen

const styles = StyleSheet.create({
	imageCarousel: {
		aspectRatio: 1
	},
	productTitle: {
		textAlign: 'center',
		fontSize: 34,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: colors.eggPlant,
		marginVertical: 10
	},
	productPrice: {
		color: colors.mauveTaupe,
		fontWeight: '700',
		fontSize: 16
	},
	productDescription: {
		color: colors.eerieBlack,
		fontWeight: '400',
		marginVertical: 10,
		fontSize: 18,
		lineHeight: 30
	},
	productDescriptionView: {
		paddingHorizontal: 20,
		paddingVertical: 10
	}
})

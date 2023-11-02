import {
	StyleSheet,
	View,
	Image,
	FlatList,
	useWindowDimensions,
	Text,
	ScrollView,
	Pressable
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
			<View style={styles.productDescriptionView}>
				<Text style={styles.productTitle}>{product.name}</Text>
				{/* Price */}
				<Text style={styles.productPrice}>${product.price}</Text>
				{/* Description */}
				<Text style={styles.productDescription}>
					{product.description}
				</Text>
				{/* Add To Cart Button */}
				<Pressable
					style={{
						backgroundColor: colors.mauveTaupe,
						display: 'flex',
						width: width / 3,
						marginVertical: 10,
						borderRadius: 3,
						alignSelf: 'flex-end'
					}}
					onPress={() => console.log('Add to Cart')}
				>
					<Text
						style={{
							padding: 10,
							textAlign: 'center',
							fontSize: 20,
							color: colors.isabelline,
							fontWeight: 'bold'
						}}
					>
						Add to Cart
					</Text>
				</Pressable>
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
		fontSize: 34,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: colors.eggPlant,
		marginVertical: 10
	},
	productPrice: {
		color: colors.mauveTaupe,
		fontWeight: '700',
		fontSize: 16,
		letterSpacing: 1.2
	},
	productDescription: {
		color: colors.eerieBlack,
		fontWeight: '400',
		marginVertical: 15,
		fontSize: 18,
		lineHeight: 30
	},
	productDescriptionView: {
		paddingHorizontal: 20,
		backgroundColor: colors.isabelline
	}
})

import {
	View,
	StyleSheet,
	SafeAreaView,
	FlatList,
	Text,
	Pressable,
	ScrollView
} from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
import colors from '../constants/colors'
import { Feather } from '@expo/vector-icons'

const ShoppingCartScreen = () => {
	const checkoutItems = () => {
		console.log('Items checked out')
	}

	return (
		// <SafeAreaView style={styles.safeAreaViewStyles}>
		<>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				ListFooterComponent={() => (
					<View style={styles.totalsContainer}>
						<View style={styles.row}>
							<Text style={styles.cartSummary}>Subtotal</Text>
							<Text style={styles.cartSummary}>$410,00</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.cartSummary}>Delivery</Text>
							<Text style={styles.cartSummary}>$10,00</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.cartSummaryBold}>Total</Text>
							<Text style={styles.cartSummaryBold}>$420,00</Text>
						</View>
					</View>
				)}
			/>
			<ScrollView>
				<Pressable
					style={styles.checkoutPressableStyles}
					onPress={checkoutItems}
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
						<Feather
							name='credit-card'
							size={24}
							color='white'
							style={{ alignSelf: 'center' }}
						/>
						{'    '}
						Checkout
					</Text>
				</Pressable>
			</ScrollView>
		</>
		// </SafeAreaView>
	)
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
	safeAreaViewStyles: {
		// paddingVertical: 20
	},
	totalsContainer: {
		backgroundColor: colors.middleGreen
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: colors.middleGreen,
		borderWidth: 1,
		borderColor: colors.isabelline
	},
	cartSummary: {
		color: colors.isabelline,
		fontSize: 18,
		fontWeight: '400'
	},
	cartSummaryBold: {
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold'
	},
	checkoutPressableStyles: {
		backgroundColor: colors.mauveTaupe,
		display: 'flex',
		// width: width / 3,
		marginVertical: 20,
		borderRadius: 5,
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

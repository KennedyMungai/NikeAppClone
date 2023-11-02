import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
import colors from '../constants/colors'

const ShoppingCartScreen = () => {
	return (
		<SafeAreaView style={styles.safeAreaViewStyles}>
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
		</SafeAreaView>
	)
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
	safeAreaViewStyles: {
		paddingVertical: 20
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
	}
})

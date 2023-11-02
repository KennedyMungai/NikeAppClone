import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartScreen = () => {
	return (
		<SafeAreaView style={styles.safeAreaViewStyles}>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				ListHeaderComponent={() => (
					<View style={styles.totalsContainer}>
						<View style={styles.row}>
							<Text>Subtotal</Text>
							<Text>$410,00</Text>
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
		paddingHorizontal: 5,
		paddingVertical: 20
	},
	totalsContainer: {},
	row: {}
})

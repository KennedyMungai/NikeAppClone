import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartScreen = () => {
	return (
		<SafeAreaView style={styles.safeAreaViewStyles}>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
			/>
		</SafeAreaView>
	)
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
	safeAreaViewStyles: {
		paddingHorizontal: 5,
		paddingVertical: 20
	}
})

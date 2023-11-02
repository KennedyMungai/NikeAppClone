import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'

const ShoppingCartScreen = () => {
	return (
		<SafeAreaView style={styles.safeAreaViewStyles}>
			<Text>ShoppingCartScreen</Text>
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

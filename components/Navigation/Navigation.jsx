import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailScreen from '../../screens/ProductDetailScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ShoppingCartScreen from '../../screens/ShoppingCartScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Products' component={ProductsScreen} />
				<Stack.Screen
					name='Product Details'
					component={ProductDetailScreen}
				/>
				<Stack.Screen
					name='ShoppingCart'
					component={ShoppingCartScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
